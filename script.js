const alumniData = [
  {
    nickname: "Collin",
    campus: "Institut Teknologi Bandung",
    ig: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/in/collin-sheima/",
    photo: "URL Foto",
  },
  {
    nickname: "Akiraka",
    campus: "Institut Teknologi Sepuluh Nopember",
    ig: "https://www.instagram.com/akiraka123/",
    linkedin: "https://www.linkedin.com/in/akiraka123/",
    photo: "https://i.imgur.com/z2BCaNa.jpeg",
  },
  {
    nickname: "Azhar",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Abid",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Gustia",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Fauzi",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Alifia",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Nadia",
    campus: "Universitas Amikom Yogyakarta",
    ig: "https://www.instagram.com/slvnadia",
    linkedin: "https://www.linkedin.com/in/nadia-silvia-616622310/",
    photo: "URL Foto",
  },
  {
    nickname: "Ridhwan",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Nouval",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Ikhwan",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Teguh",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Fatih",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Muzzza",
    campus: "Universitas Ternak Lele",
    ig: "https://www.instagram.com/afifmza",
    linkedin: "https://www.linkedin.com/in/muhammadafifrohmanmuzaky/",
    photo: "https://i.ibb.co.com/rHLdk0g/Screenshot-2024-10-29-050822.png",
  },
  {
    nickname: "Faiz",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Dian",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Rekha",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Afrian",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Paul",
    campus: "Universitas Sebelas Maret",
    ig: "https://www.instagram.com/paa.ullll/",
    linkedin: "https://www.linkedin.com/in/annisa-syifaul-ummah-3601b7266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    photo: "https://lh3.googleusercontent.com/pw/AP1GczP9zOueWnv-5p4b2eau9HXltcsp3Qi1FBWpCF7G8weKaHbFTjrDHWp57c2ncP4E9uJ5nFT0QZ8Ts7LKKCk6HnH3zOSlkgStHxRbWvm3jctG5ta5LQ=w2400",
  },
  {
    nickname: "Rizki",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Wiranto M Ginanjar",
    campus: "Universitas Widyatama",
    ig: "https://www.instagram.com/wir_muhammad",
    linkedin: "www.linkedin.com/in/wiramuhammad",
    photo: "https://lh3.googleusercontent.com/pw/AP1GczOYvJQtPQuvojbjv2Yj0IDNoIfX5XH4mQcUXD4wc_m1U9l2fCa77KgBCwU4UahQVRznUAhOb4pPlxstVuiln0LyvXSYHrELWBnj75J6IflpLecAxkg=w2400",
  },
  {
    nickname: "Raffausta",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
    nickname: "Sela",
    campus: "Institut Teknologi Dirgantara Adisutjipto",
    ig: "https://www.linkedin.com/in/seladwi",
    linkedin: "https://www.instagram.com/sldwaprl/",
    photo: "https://i.ibb.co.com/87tTvvh/image.png",
  },
  {
    nickname: "John",
    campus: "Asal Kampus",
    ig: "Link Instagram",
    linkedin: "Link LinkedIn",
    photo: "URL Foto",
  },
  {
     nickname: "Evid",
        campus: "School of Technopreneur Nusantara",
        ig: "https://www.instagram.com/epidoey/",
        linkedin: "https://www.linkedin.com/in/evid-wijaya/",
        photo: "https://i.ibb.co.com/2t2mY4h/c232297c-6922-4b43-a7e0-8f35f4125b44.jpg",
  }
];

function createAlumniCard(alumni) {
  const col = document.createElement("div");
  col.className = "col-md-4 col-lg-3";

  const card = document.createElement("div");
  card.className = "alumni-card";

  const img = document.createElement("img");
  // Use the default image if no valid photo URL is provided
  img.src =
    alumni.photo && alumni.photo !== "URL Foto"
      ? alumni.photo
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png";
  img.alt = `${alumni.nickname} photo`;

  const name = document.createElement("h2");
  name.textContent = alumni.nickname;

  const campus = document.createElement("p");
  campus.textContent = alumni.campus;

  const links = document.createElement("div");
  links.className = "links";

  const igLink = document.createElement("a");
  igLink.href = alumni.ig && alumni.ig !== "Link Instagram" ? alumni.ig : "#";
  igLink.textContent = "Instagram";
  igLink.target = alumni.ig && alumni.ig !== "Link Instagram" ? "_blank" : "_self";

  const separator = document.createElement("span");
  separator.textContent = "  ";

  const linkedinLink = document.createElement("a");
  linkedinLink.href =
    alumni.linkedin && alumni.linkedin !== "Link LinkedIn" ? alumni.linkedin : "#";
  linkedinLink.textContent = "LinkedIn";
  linkedinLink.target =
    alumni.linkedin && alumni.linkedin !== "Link LinkedIn" ? "_blank" : "_self";

  links.appendChild(igLink);
  links.appendChild(separator);
  links.appendChild(linkedinLink);

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(campus);
  card.appendChild(links);

  col.appendChild(card);
  return col;
}

document.addEventListener("DOMContentLoaded", () => {
  const alumniContainer = document.getElementById("alumniContainer");

  // Use the data directly without shuffling
  alumniData.forEach((alumni) => {
    const col = createAlumniCard(alumni);
    alumniContainer.appendChild(col);
  });

  // Initialize Masonry layout
  new Masonry("#alumniContainer", {
    itemSelector: ".col-md-4",
    columnWidth: ".col-md-4",
    percentPosition: true,
  });
});
