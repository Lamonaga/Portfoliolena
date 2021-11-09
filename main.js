const body = document.body;
const works = document.querySelector(".works");
const aboutMe = document.querySelector(".aboutMe");
const blog = document.querySelector(".reviews");
const contact = document.querySelector(".read");
// navLinks
const linkWorks = document.querySelector("#works");
const linkAboutMe = document.querySelector("#aboutMe");
const linkBlog = document.querySelector("#blog");
const linkContact = document.querySelector("#contact");
// btnLink
const worksLink = document.querySelector(".works__link");
//modal
const modalWorks = document.querySelector(".modal");

function scrollVIew(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

linkWorks.addEventListener("click", () => {
  scrollVIew(works);
});
linkAboutMe.addEventListener("click", () => {
  scrollVIew(aboutMe);
});
linkBlog.addEventListener("click", () => {
  scrollVIew(blog);
});
linkContact.addEventListener("click", () => {
  scrollVIew(contact);
});

const worksItems = [
  {
    id: new Date(),
    imgSrc: "./img/lena.jpg",
    category: "CATEGORY",
    title: "{eq} TITLE",
    ears: "2012",
    text: "Соображения высшего порядка, а также курс на социально-ориентированный национальный проект способствует повышению актуальности направлений прогрессивного развития. Соображения высшего порядка, а также курс на социально-ориентированный национальный проект в значительной степени обуславливает создание дальнейших направлений развития проекта! Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект требует от нас анализа модели развития",
    client: "Creative Agency",
  },
  {
    id: new Date(),
    imgSrc: "./img/lena.jpg",
    category: "Приколы, мемы",
    title: "Ахуенный проект",
    ears: "2012",
    text: "Соображения высшего порядка, а также курс на социально-ориентированный национальный проект способствует повышению актуальности направлений прогрессивного развития. Соображения высшего порядка, а также курс на социально-ориентированный национальный проект в значительной степени обуславливает создание дальнейших направлений развития проекта! Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект требует от нас анализа модели развития",
    client: "Елена Борисов",
  },
];

function pushArrowWorks() {
  worksItems.push({
    id: new Date(),
    imgSrc: "./img/lena.jpg",
    category: "CATEGORY",
    title: "PROJECT TITLE",
    ears: "2018",
    text: "Соображения высшего порядка, а также курс на социально-ориентированный национальный проект способствует повышению актуальности направлений прогрессивного развития. Соображения высшего порядка, а также курс на социально-ориентированный национальный проект в значительной степени обуславливает создание дальнейших направлений развития проекта! Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект требует от нас анализа модели развития",
    client: "Creative Agency",
  });
}

function createItemWork() {
  worksItems.forEach((element) => {
    const worksInner = document.querySelector(".works__inner");
    const worksItem = document.createElement("div");
    const worksImg = document.createElement("img");
    const worksProjType = document.createElement("div");
    const worksProjInfo = document.createElement("div");
    const worksProjTitle = document.createElement("div");
    const worksProjDate = document.createElement("div");
    worksItem.classList.add("works__item");
    worksProjType.classList.add("project__type");
    worksProjInfo.classList.add("project__info");
    worksProjTitle.classList.add("project__title");
    worksProjDate.classList.add("project__data");
    worksImg.classList.add("works__img");
    worksImg.width = "370";
    worksImg.height = "300";

    worksItem.setAttribute("data-id", element.id);
    worksProjType.textContent = element.category;
    worksProjDate.textContent = element.ears;
    worksProjTitle.textContent = element.title;
    worksImg.src = element.imgSrc;

    console.log(worksItems);

    worksProjInfo.append(worksProjTitle);
    worksProjInfo.append(worksProjDate);
    worksItem.append(worksImg);
    worksItem.append(worksProjType);
    worksItem.append(worksProjInfo);
    worksInner.append(worksItem);

    worksItem.addEventListener("click", () => {
      //createElemModal
      const modalWorks = document.createElement("div");
      const modalDialog = document.createElement("div");
      const modalRemove = document.createElement("div");
      const modalRemoveBtn = document.createElement("button");
      const modalRemoveBtnimg = document.createElement("img");
      const modalPhoto = document.createElement("div");
      const modalPhotoImg = document.createElement("img");
      const modalContent = document.createElement("div");
      const modalContentTitle = document.createElement("div");
      const modalContentType = document.createElement("div");
      const modalContentTypeCategory = document.createElement("div");
      const modalContentTypeEars = document.createElement("div");
      const modalContentClient = document.createElement("div");
      const modalContentClientTitle = document.createElement("div");
      const modalContentClientName = document.createElement("div");
      const modalContentText = document.createElement("div");
      const modalBtn = document.createElement("div");
      const modalBtnPrev = document.createElement("button");
      const modalBtnPrevImg = document.createElement("img");
      const modalBtnNext = document.createElement("button");
      const modalBtnNextImg = document.createElement("img");
      //classList
      modalWorks.classList.add("modal");
      modalDialog.classList.add("modal__dialog");
      modalRemove.classList.add("modal__remove");
      modalRemoveBtnimg.classList.add("remove__img");
      modalPhoto.classList.add("modal__photo");
      modalPhotoImg.classList.add("modal__img");
      modalContent.classList.add("modal__content");
      modalContentTitle.classList.add("modal__title");
      modalContentType.classList.add("modal__type");
      modalContentTypeCategory.classList.add("modal__category");
      modalContentTypeEars.classList.add("modal__ears");
      modalContentClient.classList.add("modal__client");
      modalContentClientTitle.classList.add("modal__client__title");
      modalContentClientName.classList.add("modal__client__name");
      modalContentText.classList.add("modal__text");
      modalBtn.classList.add("modal__btn");
      modalBtnPrev.classList.add("modal__btn--next");
      modalBtnPrevImg.classList.add("icon__arrowleft");
      modalBtnNext.classList.add("modal__btn--next");
      modalBtnNextImg.classList.add("icon__arrowright");
      modalBtnPrev.setAttribute('data-type', 'prev')
      modalBtnNext.setAttribute('data-type', 'next')
      //inner
      modalRemoveBtnimg.src = "./img/remove-button.png";
      modalPhotoImg.src = element.imgSrc;
      modalContentTitle.textContent = element.title;
      modalContentTypeCategory.textContent = element.category;
      modalContentTypeEars.textContent = element.ears;
      modalContentClientTitle.textContent = "Client";
      modalContentClientName.textContent = element.client;
      modalContentText.textContent = element.text;
      modalBtnPrev.textContent = "PREVIOUS";
      modalBtnNext.textContent = "NEXT";
      modalBtnNextImg.src = "./img/right-arrow.png";
      modalBtnPrevImg.src = "./img/left-arrow.png";
      //append
      modalDialog.append(modalRemove);
      modalRemove.append(modalRemoveBtn);
      modalRemoveBtn.append(modalRemoveBtnimg);
      modalDialog.append(modalPhoto);
      modalPhoto.append(modalPhotoImg);
      modalDialog.append(modalContent);
      modalContent.append(modalContentTitle);
      modalContent.append(modalContentType);
      modalContentType.append(modalContentTypeCategory);
      modalContentType.append(modalContentTypeEars);
      modalContent.append(modalContentClient);
      modalContentClient.append(modalContentClientTitle);
      modalContentClient.append(modalContentClientName);
      modalContent.append(modalContentText);
      modalContent.append(modalBtn);
      modalBtn.append(modalBtnPrev);
      modalBtnPrev.append(modalBtnPrevImg);
      modalBtn.append(modalBtnNext);
      modalBtnNext.append(modalBtnNextImg);
      modalWorks.append(modalDialog);
      body.append(modalWorks);

      modalPhotoImg.width = "790";
      modalPhotoImg.height = "780";

      modalRemoveBtn.addEventListener("click", () => {
        modalWorks.remove();
      });
    });
  });
}

function createModalWorks() {
  //createElem
  const modalWorks = document.createElement("div");
  const modalDialog = document.createElement("div");
  const modalRemove = document.createElement("div");
  const modalRemoveBtn = document.createElement("button");
  const modalRemoveBtnimg = document.createElement("img");
  const modalPhoto = document.createElement("div");
  const modalPhotoImg = document.createElement("img");
  const modalContent = document.createElement("div");
  const modalContentTitle = document.createElement("div");
  const modalContentType = document.createElement("div");
  const modalContentTypeCategory = document.createElement("div");
  const modalContentTypeEars = document.createElement("div");
  const modalContentClient = document.createElement("div");
  const modalContentClientTitle = document.createElement("div");
  const modalContentClientName = document.createElement("div");
  const modalContentText = document.createElement("div");
  const modalBtn = document.createElement("div");
  const modalBtnPrev = document.createElement("button");
  const modalBtnPrevImg = document.createElement("img");
  const modalBtnNext = document.createElement("button");
  const modalBtnNextImg = document.createElement("img");
  //classList
  modalWorks.classList.add("modal");
  modalDialog.classList.add("modal__dialog");
  modalRemove.classList.add("modal__remove");
  modalRemoveBtnimg.classList.add("remove__img");
  modalRemove.classList.add("modal__photo");
  modalPhoto.classList.add("modal__photo");
  modalPhotoImg.classList.add("modal__img");
  modalContent.classList.add("modal__content");
  modalContentTitle.classList.add("modal__title");
  modalContentType.classList.add("modal__type");
  modalContentTypeCategory.classList.add("modal__category");
  modalContentTypeEars.classList.add("modal__ears");
  modalContentClient.classList.add("modal__client");
  modalContentClientTitle.classList.add("modal__client__title");
  modalContentClientName.classList.add("modal__client__name");
  modalContentText.classList.add("modal__text");
  modalBtn.classList.add("modal__btn");
  modalBtnPrev.classList.add("modal__btn--next");
  modalBtnPrevImg.classList.add("icon__arrowleft");
  modalBtnNext.classList.add("modal__btn--next");
  modalBtnNextImg.classList.add("icon__arrowright");
  //append
  modalDialog.append(modalRemove);
  modalRemove.append(modalRemoveBtn);
  modalRemoveBtn.append(modalRemoveBtnimg);
  modalDialog.append(modalPhoto);
  modalPhoto.append(modalPhotoImg);
  modalDialog.append(modalContent);
  modalContent.append(modalContentTitle);
  modalContent.append(modalContentType);
  modalContentType.append(modalContentTypeCategory);
  modalContentType.append(modalContentTypeEars);
  modalContent.append(modalContentClient);
  modalContentClient.append(modalContentClientTitle);
  modalContentClient.append(modalContentClientName);
  modalContent.append(modalContentText);
  modalContent.append(modalBtn);
  modalBtn.append(modalBtnPrev);
  modalBtnPrev.append(modalBtnPrevImg);
  modalBtn.append(modalBtnNext);
  modalBtnNext.append(modalBtnNextImg);
  modalWorks.append(modalDialog);
}
createItemWork();

worksLink.addEventListener("click", (e) => {
  e.preventDefault();
  createItemWork();
  pushArrowWorks();
  console.log(worksItems);
});

const btnResume = document.querySelectorAll(".resume");
const modalResume = document.querySelector('.modal[data-modal="resume"]');
const removeResume = document.querySelector(
  '.modal__remove[data-modal="resume"]'
);
console.log(modalResume);
btnResume.forEach((element) => {
  element.addEventListener("click", () => {
    if (modalResume.style.display === "flex") {
      modalResume.style.display = "none";
    } else {
      modalResume.style.display = "flex";
    }
    removeResume.addEventListener("click", () => {
      modalResume.style.display = "none";
    });
  });
});

//btnNext

function turnPages () {
  modalRemoveBtnimg.src = "./img/remove-button.png";
  modalPhotoImg.src = modalWorks.imgSrc;
  modalContentTitle.textContent = element.title;
  modalContentTypeCategory.textContent = element.category;
  modalContentTypeEars.textContent = element.ears;
  modalContentClientTitle.textContent = "Client";
  modalContentClientName.textContent = element.client;
  modalContentText.textContent = element.text;
  modalBtnPrev.textContent = "PREVIOUS";
  modalBtnNext.textContent = "NEXT";
  modalBtnNextImg.src = "./img/right-arrow.png";
  modalBtnPrevImg.src = "./img/left-arrow.png";
}