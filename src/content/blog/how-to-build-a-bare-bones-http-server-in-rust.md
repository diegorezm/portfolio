---
title: How to build a bare bones HTTP server in Rust
pubDate: 2024-12-07T03:06:46.843Z
description: "How to build a http server in rust with as little dependencies as possible."
tags: ["rust", "http", "server", "networking"]
---

## Introduction  

While building [a tool to track job applications](https://github.com/diegorezm/job-search), I initially planned to store the information in a SQLite database and display it in the terminal. That was supposed to be it.  

But then I thought it would be fun to display the information in a browser. The question was: *how?*  

At first, I considered using a framework like [Hyper](https://hyper.rs/), but where’s the fun in that? So I decided to build my own HTTP server.  

While exploring the Rust documentation, I discovered an interesting project: [Building a Multithreaded Web Server](https://doc.rust-lang.org/book/ch20-00-final-project-a-web-server.html). This served as a great starting point.  

---

## Solution  

With a clearer goal in mind, I began building the server. Since I didn’t need multithreading, I skipped that part of the tutorial.  

### Step 1: Bind a Socket to a Port  

The first step is binding a socket to a port:  

```rust
let tcp = TcpListener::bind("127.0.0.1:8080")
    .map_err(|e| eprintln!("Error while binding to port: {}", e))
    .unwrap();
```

### Step 2: Handle Incoming Connections  

Next, we handle incoming connections:  

```rust
for stream in tcp.incoming() {
    match stream {
        Ok(stream) => handle_request(stream),
        Err(e) => eprintln!("Error while accepting connection: {}", e),
    }
}
```

Here, we use the `handle_request` function to process incoming requests. Let’s take a closer look at this function.  

---

## Handling Requests  

### Creating a Buffer  

We start by creating a buffer to read incoming data:  

```rust
fn handle_request(mut stream: TcpStream) {
    let mut buf_reader = BufReader::new(&stream);
    let mut content_length = 0;
    let mut lines = Vec::new();
}
```

The `BufReader` helps with efficient reading, and the `lines` vector will store request headers.  

### Reading Headers  

Now, let’s read the headers:  

```rust
for line_result in buf_reader.by_ref().lines() {
    match line_result {
        Ok(line) => {
            if line.is_empty() {
                break;
            }
            if line.starts_with("Content-Length: ") {
                content_length = line
                    .split("Content-Length: ")
                    .last()
                    .unwrap()
                    .parse::<usize>()
                    .unwrap();
            }
            lines.push(line);
        }
        Err(e) => eprintln!("Error while reading request line: {}", e),
    }
}
```

Each header is stored in the `lines` vector. If the request includes a `Content-Length` header, its value is extracted and stored in `content_length`.  

### Reading the Body  

Once we’ve captured the headers, we can read the body if it exists:  

```rust
let mut body = String::new();
if content_length > 0 {
    buf_reader
        .take(content_length as u64)
        .read_to_string(&mut body)
        .expect("Failed to read request body");
}
```

---

## Processing the Request  

Now, let’s handle different request types:  

```rust
if request_line.starts_with("GET / HTTP/1.1") {
    let response = format!(
        "HTTP/1.1 200 OK\r\nContent-Length: {}\r\n\r\n",
        0
    );
    stream.write_all(response.as_bytes()).unwrap();
} else if request_line.starts_with("POST / HTTP/1.1") {
    let parsed_body: HashMap<String, String> = serde_json::from_str(&body).unwrap();
    let hello = parsed_body.get("hello").unwrap_or(&String::new());
    let response = format!(
        "HTTP/1.1 200 OK\r\nContent-Length: {}\r\n\r\n{}",
        hello.len(),
        hello
    );
    stream.write_all(response.as_bytes()).unwrap();
}
```

For a `GET` request, the server responds with a simple `200 OK`. For a `POST` request, the server reads the body, parses it as JSON, and responds with a value (if available).  

---

## Conclusion  

And that’s it! You now have a bare-bones HTTP server written in Rust. This implementation might not be production-ready, but it’s a great way to understand the basics of networking and request handling in Rust.  

