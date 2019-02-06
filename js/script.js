const link = "​http://petlatkea.dk/2019/students1991.json";
const template = document.querySelector("#Student-list").content;

function getNames() {
  fetch(link)
    .then(res => res.json())
    .then(showNames);
}

function showNames(nameList) {
  console.log(nameList);
  nameList.forEach(name => {
    console.log(name.fullname);
    const clone = template.cloneNode(true);

    clone.querySelector("h1 span").content = name.fullname;
    clone.querySelector("h2 span").content = name.house;

    document.querySelector("main").appendChild(clone);
  });
}

getNames();
