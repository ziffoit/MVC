const newPost = async (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("body").value;

    await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
    });
    document.location.replace("/dashboard");
};

document.querySelector("#new-post-form").addEventListener("submit", newPost);
