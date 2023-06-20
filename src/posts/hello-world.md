---
title: Hello World!
date: "2023-06-19"
tags:
    - "rambling"
    - "testing"
---

Hello world! Welcome to my blog!

I'm probably going to post a variety of things here, with reposts on tumblr.

Here is a test for code:

@ line 27
```rust
fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugin(HelloPlugin)
        .run();
}

fn greet_people(time: Res<Time>, query: Query<&Name, With<Person>>) {
    for name in &query {
        println!("hello {}!", name.0);
    }
}
```

