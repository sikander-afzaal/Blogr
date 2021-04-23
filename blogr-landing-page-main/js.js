const Product = document.querySelector(".product");
const ProductDropdown = document.querySelector(".Product-dropdown");
const Company = document.querySelector(".company");
const CompanyDropdown = document.querySelector(".Company-dropdown");
const Connect = document.querySelector(".connect");
const ConnectDropdown = document.querySelector(".Connect-dropdown");
// Drop down code--------------------------------------------------------------------
Product.addEventListener("click", () => {
  ProductDropdown.classList.toggle("fade-in");
  ProductDropdown.classList.toggle("fade-out");
  document.querySelector("#product").classList.toggle("rotate");
  ////
  CompanyDropdown.classList.add("fade-out");
  if (document.querySelector("#company").classList.contains("rotate")) {
    document.querySelector("#company").classList.toggle("rotate");
  }
  ///
  ConnectDropdown.classList.add("fade-out");
  if (document.querySelector("#connect").classList.contains("rotate")) {
    document.querySelector("#connect").classList.toggle("rotate");
  }
});
/////////////////////////////////////////////////////////
Company.addEventListener("click", () => {
  CompanyDropdown.classList.toggle("fade-in");
  CompanyDropdown.classList.toggle("fade-out");
  document.querySelector("#company").classList.toggle("rotate");
  ///
  ProductDropdown.classList.add("fade-out");
  if (document.querySelector("#product").classList.contains("rotate")) {
    document.querySelector("#product").classList.toggle("rotate");
  }
  ////
  ConnectDropdown.classList.add("fade-out");
  if (document.querySelector("#connect").classList.contains("rotate")) {
    document.querySelector("#connect").classList.toggle("rotate");
  }
});
///////////////////////////////////////////////////////
Connect.addEventListener("click", () => {
  ConnectDropdown.classList.toggle("fade-in");
  ConnectDropdown.classList.toggle("fade-out");
  document.querySelector("#connect").classList.toggle("rotate");
  ///
  ProductDropdown.classList.add("fade-out");
  if (document.querySelector("#product").classList.contains("rotate")) {
    document.querySelector("#product").classList.toggle("rotate");
  }
  ////
  CompanyDropdown.classList.add("fade-out");
  if (document.querySelector("#company").classList.contains("rotate")) {
    document.querySelector("#company").classList.toggle("rotate");
  }
});
/////////////////////////////////////////////////////////////////
const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");

hamburger.addEventListener("click", () => {
  hamburger.classList.add("close");
  closeIcon.classList.remove("close");
  document.querySelector("#box").classList.remove("close");
  document.querySelector(".overlay").classList.remove("close");
});
closeIcon.addEventListener("click", () => {
  hamburger.classList.remove("close");
  closeIcon.classList.add("close");
  document.querySelector("#box").classList.add("close");
  document.querySelector(".overlay").classList.add("close");
});
//////////////////////////////////////////////////////
const productMobile = document.querySelector("#product-mobile");
const companyMobile = document.querySelector("#company-mobile");
const connectMobile = document.querySelector("#connect-mobile");
////////////////////////////////////////////////////////////////////
productMobile.addEventListener("click", () => {
  document.querySelector(".dropdown-mobile-product").classList.toggle("open");
  document.querySelector("#product-mobile-arrow").classList.toggle("rotate");
  //////////////////////////////////////////////////////////////////////
  document.querySelector(".dropdown-mobile-company").classList.remove("open");
  document.querySelector("#company-mobile-arrow").classList.remove("rotate");
  document.querySelector(".dropdown-mobile-connect").classList.remove("open");
  document.querySelector("#connect-mobile-arrow").classList.remove("rotate");
});
/////////////////////////////////////////////////////////
companyMobile.addEventListener("click", () => {
  document.querySelector(".dropdown-mobile-company").classList.toggle("open");
  document.querySelector("#company-mobile-arrow").classList.toggle("rotate");
  //////////////////////////////////////////////////////////////////
  document.querySelector(".dropdown-mobile-product").classList.remove("open");
  document.querySelector("#product-mobile-arrow").classList.remove("rotate");
  document.querySelector(".dropdown-mobile-connect").classList.remove("open");
  document.querySelector("#connect-mobile-arrow").classList.remove("rotate");
});
/////////////////////////////////////////////////////////////////
connectMobile.addEventListener("click", () => {
  document.querySelector(".dropdown-mobile-connect").classList.toggle("open");
  document.querySelector("#connect-mobile-arrow").classList.toggle("rotate");
  ////////////////////////////////////////////////////////////
  document.querySelector(".dropdown-mobile-company").classList.remove("open");
  document.querySelector("#company-mobile-arrow").classList.remove("rotate");
  document.querySelector(".dropdown-mobile-product").classList.remove("open");
  document.querySelector("#product-mobile-arrow").classList.remove("rotate");
});
