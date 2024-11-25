export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_POSTER =
  "https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_small.jpg";

export const USER_AVATAR =
  "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

// const myHeaders = new Headers();
// myHeaders.append(
//   "x-apihub-key",
//   "pQ-qe6rsvguMOhITf5RPPLWrB7O1pXdwtSOMAYudQfPfYYnrHD"
// );
// myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
// myHeaders.append("x-apihub-endpoint", "4f700f4a-4bd2-4604-8d5b-7b5e4c976c65");

// export const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
// };

// const api_key="pQ-qe6rsvguMOhITf5RPPLWrB7O1pXdwtSOMAYudQfPfYYnrHD"

const myHeaders = new Headers();
myHeaders.append(
  "x-apihub-key",
  "pQ-qe6rsvguMOhITf5RPPLWrB7O1pXdwtSOMAYudQfPfYYnrHD"
);
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "c87f1a11-e835-4a06-bc95-c6fc6a937f22");

export const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const myHeader = new Headers();
myHeader.append(
  "x-apihub-key",
  "pQ-qe6rsvguMOhITf5RPPLWrB7O1pXdwtSOMAYudQfPfYYnrHD"
);
myHeader.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeader.append("x-apihub-endpoint", "5122e0f8-a949-45a9-aedf-5eaf61c6085b");

export const requestOption = {
  method: "GET",
  headers: myHeader,
  redirect: "follow",
};
