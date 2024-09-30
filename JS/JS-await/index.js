fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((user) => {
    console.log("User data:", user);
  });

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchData();
fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((comment) => {
    console.log("Comment data:", comment);
  })
  .catch((error) => {
    console.error("Error fetching comment:", error);
  });

const fetchData1 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments/1"
    );
    const comment = await response.json();
    console.log(comment);
    return comment;
  } catch (error) {
    console.log(error);
  }
};
fetchData1();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    console.log("All posts:", posts);
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
  });

const fetchData2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await response.json();
    console.log("all post", post);
    return post;
  } catch (error) {
    console.log(error);
  }
};

fetchData2();

fetch("https://jsonplaceholder.typicode.com/albums/1")
  .then((response) => response.json())
  .then((album) => {
    console.log("Album data:", album);
    return fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
    );
  })
  .then((response) => response.json())
  .then((photos) => {
    console.log("Photos in Album 1:", photos);
  })
  .catch((error) => {
    console.error("Error fetching album or photos:", error);
  });

const fetchData3 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums/1");
  const album = await response.json();
  console.log("Album data:", album);

  const response1 = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
  );
  const photo = await response1.json();
  console.log(photo);
};
fetchData3();

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    console.log("User data:", user);
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
  })
  .then((response) => response.json())
  .then((posts) => {
    console.log("User posts:", posts);
  })
  .catch((error) => {
    console.error("Error fetching user or posts:", error);
  });

const fetchData4 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log("User data:", user);

    const response1 = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await response1.json();
    console.log("User posts:", posts);
  } catch (error) {
    console.error("Error fetching user or posts:", error);
  }
};

fetchData4();
