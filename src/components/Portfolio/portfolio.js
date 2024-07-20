import React from "react";
import "./portfolio.css";
import Portfolio1 from '../../assets/whizzy1.jpg'
import Portfolio2 from '../../assets/bplo1.jpg'
// import Portfolio3 from '../../assets/whizzy3.jpg'
import Earthquake from '../../assets/earthquake.jpg'
import GuessThePitch from '../../assets/guessthepitch.jpg'
import Whizzylogin from '../../assets/whizzylogin.png'
import Whizzyhome from '../../assets/whizzyhome.png'
import WhizzyUI from '../../assets/whizzyUI.jpg'
import WhizzyPic from '../../assets/WhizzyPic.jpg'
import WhizzyHi from '../../assets/WhizzyHi.jpg'
import BploLogin from '../../assets/BPLO1login.png'
import BploDashboard from '../../assets/BPLO2dashboard.png'
import BploSearchDoc from '../../assets/BPLO3searchdoc.png'
import BploUpload from '../../assets/BPLO4upload.png'
import BploManage from '../../assets/BPLO5manage.png'
import BploLogs from '../../assets/BPLO6;logs.png'
import BploEditProf from '../../assets/BPLO7editprof.png'
import Nse1 from '../../assets/NSE1.png'
import Nse2 from '../../assets/NSE2.png'
import Forticerti from '../../assets/fortinetcertificate.png'
import Ciscocerti from '../../assets/ciscoCertificate.png'
import Goldstone from '../../assets/GoldstoneSeminar.png'
import LegalpersAI from '../../assets/ExploringthelegalperspectiveofAI.png'

const Portfolio = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");

    const details = document.querySelector("details");
    details.addEventListener("click", (e) => {
      if (details.hasAttribute("open")) { // since it's not closed yet, it's open!
        e.preventDefault(); // stop the default behavior, meaning - the hiding
        details.classList.add("closing"); // add a class which applies the animation in CSS
      }
    });

    // when the "close" animation is over
    details.addEventListener("animationend", (e) => {
      if (e.animationName === "close") {
        details.removeAttribute("open"); // close the element
        details.classList.remove("closing"); // remove the animation
      }
    });

  };
  return (
    <section id="portfolio">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        As a student these are the works I have taken part in and I consider
        these experiences very valuable. <br />
        (Click Them to View our works)
      </span>
      <div className="worksImgs">
      </div>
      {/* <button className="workBtn">More Soon</button> */}

      <div className="portfolioBars">
        <div className="portfolioBar">
          <div className="portfolioBarText">
            <h3>Hey Whizzy: Development of an Interactive Voice-Assistive Kiosk for School Information Access</h3>
            <p>
              <div className="worksImgs">
                <figure>
                  <img src={Whizzylogin} alt="Works1" className="worksImg2" role="link"
                    onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy-Admin-Website")} />
                  <figcaption>Login Page</figcaption>
                </figure>
                <figure>
                  <img src={Whizzyhome} alt="Works2" className="worksImg2" role="link"
                    onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy-Admin-Website")} />
                  <figcaption>Landing Page - CCO Entries</figcaption>
                </figure>
                <figure>
                  <img src={WhizzyUI} alt="Works5" className="worksImg2" role="link"
                    onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy")} />
                  <figcaption>&nbsp;</figcaption>
                </figure>
                <figure>
                  <img src={WhizzyPic} alt="Works5" className="worksImg2" role="link"
                    onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy")} />
                  <figcaption>Whizzy's UI</figcaption>
                </figure>
                <figure>
                  <img src={WhizzyHi} alt="Works5" className="worksImg2" role="link"
                    onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy")} />
                  <figcaption>&nbsp;</figcaption>
                </figure>
                <figure>
                  <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
                  <figcaption>Photo With MMCL CCO Staffs</figcaption>
                </figure>
              </div>
              <details>
                <summary><span id="off">More Details</span><span id="on">Close</span></summary>
                <p className="paras">
                  In this project, we have developed a python based Voice-Assistive Interactive Kiosk prototype that accesses a local
                  database with a web based entry creator to answer school related questions and a pre-trained language model
                  for other interactive actions. The web application is able to login employees that are created by an admin and
                  only a select few are able to access this application, when the user proceeds to the landing page, they are
                  greeted with existing entries that are sorted from newest to oldest, images can be displayed but if the entry
                  does not have an image, it will use the placeholder image, this results to not displaying any image on the Kiosk
                  application. Another function of the web application is that it is able to use an advance search query where the
                  user is able to input queries of context specific words and also select from a dropdown selection of which department
                  they wish to view, resulting in a query with a specific category. These entries are then used by out voice activated
                  kiosk and when school related questions are asked, a context specific query is made via the users' speech-to-text
                  input, if otherwise, a non school related question, we would instead be using a google based voice assistant, Gemini
                  to interact with them.
                  <br /><br />
                  For this project, I have assisted in creating our initial interface for Whizzy
                  and integrated with our first tests with the language model. Also, I created the
                  design for our webpage's login page and overall design of the web application.
                </p>
              </details>
            </p>
            <span className="usedLangs">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"></path> <defs> <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse"> <stop stop-color="#327EBD"></stop> <stop offset="1" stop-color="#1565A7"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFDA4B"></stop> <stop offset="1" stop-color="#F9C600"></stop> </linearGradient> </defs> </g></svg>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path> </g></svg>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path> </g></svg>
            </span>
          </div>
        </div>
      </div>

      <div className="portfolioBars">
        <div className="portfolioBar">
          <div className="portfolioBarText">
            <h3>Biñan City Hall - Business Permit and Licensing Office Document Management System</h3>
            <p>
              <div className="worksImgs">
                <figure>
                  <img src={BploLogin} alt="Works1" className="worksImg2" role="link"
                    onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                  <figcaption>Login page</figcaption>
                </figure>
                <figure>
                  <img src={BploDashboard} alt="Works2" className="worksImg2" role="link"
                    onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                  <figcaption>Dashboard</figcaption>
                </figure>
              </div>
              <details>
                <summary><span id="off">More Images</span><span id="on">Less Images</span></summary>
                <div className="worksImgs">
                  <p className="worksImgs">
                    <figure>
                      <img src={BploSearchDoc} alt="Works2" className="worksImg2" role="link"
                        onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                      <figcaption>Search Documents Page</figcaption>
                    </figure>
                    <figure>
                      <img src={BploUpload} alt="Works2" className="worksImg2" role="link"
                        onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                      <figcaption>Upload Documents Page</figcaption>
                    </figure>
                    <figure>
                      <img src={BploManage} alt="Works2" className="worksImg2" role="link"
                        onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                      <figcaption>Admin - User Management</figcaption>
                    </figure>
                    <figure>
                      <img src={BploLogs} alt="Works2" className="worksImg2" role="link"
                        onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                      <figcaption>Admin - User Logs</figcaption>
                    </figure>
                    <figure>
                      <img src={BploEditProf} alt="Works2" className="worksImg2" role="link"
                        onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                      <figcaption>Edit Profile Page</figcaption>
                    </figure>
                    <figure>
                      <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
                      <figcaption>Presentation Photo with ICTO Head and BPLO Staffs</figcaption>
                    </figure>
                  </p>
                </div>
              </details>
              <details>
                <summary><span id="off">More Details</span><span id="on">Close</span></summary>
                <p className="paras">
                  In this project, we have developed a document management system where employees are able to view
                  documents that have been uploaded via our mobile application with sequential image taking to create
                  a long form pdf file or a manual upload via our web application as another method for documenting new
                  files received for the BPLO department. Authentication are also taking place with user levels being
                  implemented into the system. User levels greater than "User", or Admins/Super Admins are able to view
                  the admin section of the web page, where normal users would be unable to access or even see. This section
                  allows the admins to add users, edit user details or credentials and soft delete users which would then be
                  archived.
                  <br /><br />
                  For this project, I have created most of the admin management functions alongside with its modal buttons,
                  some automated fillout scripts for the upload functions alongside other additions such as helping integrate
                  the search bar's queries. The initial design of the web application is also created by me including the login
                  page.
                </p>
              </details>
            </p>
            <span className="usedLangs">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="#8892BF"></circle> <path d="M14.4392 10H16.1192L15.6444 12.5242H17.154C17.9819 12.5419 18.5986 12.7269 19.0045 13.0793C19.4184 13.4316 19.5402 14.1014 19.3698 15.0881L18.5541 19.4889H16.8497L17.6288 15.2863C17.7099 14.8457 17.6856 14.533 17.5558 14.348C17.426 14.163 17.146 14.0705 16.7158 14.0705L15.3644 14.0573L14.3661 19.4889H12.6861L14.4392 10Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.74092 12.5243H10.0036C10.9612 12.533 11.6552 12.8327 12.0854 13.4229C12.5156 14.0132 12.6576 14.8193 12.5115 15.8414C12.4548 16.3085 12.3289 16.7665 12.1341 17.2159C11.9474 17.6652 11.6878 18.0704 11.355 18.4317C10.9491 18.8898 10.5149 19.1805 10.0523 19.304C9.58969 19.4274 9.11076 19.489 8.61575 19.489H7.15484L6.69222 22H5L6.74092 12.5243ZM7.43485 17.9956L8.16287 14.0441H8.40879C8.49815 14.0441 8.5914 14.0396 8.6888 14.0309C9.33817 14.0221 9.87774 14.0882 10.308 14.2291C10.7462 14.37 10.8923 14.9031 10.7462 15.8282C10.5678 16.9296 10.2186 17.5727 9.69926 17.7577C9.1799 17.934 8.53053 18.0176 7.75138 18.0088H7.58094C7.53224 18.0088 7.48355 18.0043 7.43485 17.9956Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4365 12.5243H21.1738L19.4329 22H21.1251L21.5878 19.489H23.0487C23.5437 19.489 24.0226 19.4274 24.4852 19.304C24.9479 19.1805 25.382 18.8898 25.7879 18.4317C26.1207 18.0704 26.3803 17.6652 26.567 17.2159C26.7618 16.7665 26.8877 16.3085 26.9444 15.8414C27.0905 14.8193 26.9486 14.0132 26.5183 13.4229C26.0881 12.8327 25.3942 12.533 24.4365 12.5243ZM22.5958 14.0441L21.8678 17.9956C21.9165 18.0043 21.9652 18.0088 22.0139 18.0088H22.1843C22.9635 18.0176 23.6128 17.934 24.1322 17.7577C24.6515 17.5727 25.0007 16.9296 25.1792 15.8282C25.3253 14.9031 25.1792 14.37 24.7409 14.2291C24.3107 14.0882 23.7711 14.0221 23.1217 14.0309C23.0243 14.0396 22.9311 14.0441 22.8417 14.0441H22.5958Z" fill="white"></path> </g></svg>
              <svg viewBox="-24 0 304 304" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.104 287.306c-5.204 0-6.717-3.03-6.717-7.57 0-1.513.19-3.22.424-5.018 1.14-7.851 3.923-12.343 10.64-12.343 4.543 0 6.758 2.032 6.758 5.722v1.799h4.507c.05 0 .05-1.656.05-2.033 0-5.392-3.265-10.506-11.308-10.506-10.929 0-15.423 5.937-17.079 17.576-.237 1.562-.379 3.02-.379 4.576 0 6.86 2.699 13.1 12.349 13.1 7.332 0 11.687-3.575 14.24-7.975l-4.306-2.9c-2.79 4.401-5.82 5.572-9.179 5.572zm29.57-21.668c-8.754 0-12.536 4.492-13.813 13.432a23.325 23.325 0 0 0-.24 3.124c0 5.77 2.697 10.362 10.17 10.362 8.754 0 12.587-4.685 13.864-13.486.142-1.134.237-2.175.237-3.215.002-5.865-2.788-10.217-10.218-10.217zm3.643 13.435c-.947 6.483-2.979 8.47-6.814 8.47-3.073 0-4.586-1.278-4.586-5.11 0-.947.096-2.081.284-3.36.947-6.433 2.839-8.42 6.718-8.42 3.123 0 4.682 1.277 4.682 5.156 0 .946-.096 2.035-.284 3.264zm28.58-21.246l-1.465 8.685c-.094.755-.046.504.24 1.214-1.372-1.04-3.834-1.728-5.49-1.728-7.854 0-12.252 3.555-13.67 13.49a19.414 19.414 0 0 0-.237 3.171c0 7.241 4.257 9.94 9.98 9.94 2.416 0 4.78.05 6.623-1.509l.471 2.943h4.543l5.298-36.206h-6.293zm-4.494 28.342c-2.127 1.274-4.207 1.562-5.484 1.562-3.454 0-4.4-1.799-4.4-4.683 0-1.089.142-2.363.333-3.739 1.086-7.521 3.5-8.848 6.623-8.848 2.032 0 3.592.333 5.062 1.139l-2.134 14.569zm24.603-20.531c-8.66 0-12.725 4.113-14.099 13.432-.144 1.137-.239 2.226-.239 3.266 0 6.387 3.266 10.22 10.454 10.22 5.583 0 9.75-2.32 11.972-6.578l-4.779-1.94c-1.37 2.08-3.215 3.5-6.48 3.5-3.5 0-4.92-.942-4.92-4.065 0-.616.048-1.511.143-1.511h17.076c.24-2.414.52-4.12.52-5.535 0-4.728-1.796-10.79-9.648-10.79zm3.263 11.499H87.861c1.043-2.414 2.79-6.15 6.387-6.15 2.79 0 4.164 1.631 4.164 4.422-.003.473-.046 1.728-.143 1.728zm24.591-12.069l.567-4.827h-13.343l-.565 4.827h3.5l-3.782 24.137h-3.505l-.564 4.828h13.34l.57-4.828h-3.503l3.783-24.137h3.502zm27.11 7.241l1.705-4.827h-4.589l-3.309.683c-1.846-1.18-4.354-2.066-6.717-2.066-6.768 0-12.537 3.268-12.537 10.697 0 2.084.756 3.766 1.653 4.903-1.416.755-2.647 2.02-2.647 3.726 0 .756.282 1.53.852 2.238-2.841 1.706-4.586 4.533-4.586 7.842 0 6.39 6.669 7.753 11.778 7.753 6.433 0 14.099-1.47 14.099-9.655 0-2.79-1.75-4.97-6.812-5.916l-9.13-1.706c-1.04-.191-1.277-.522-1.277-.995 0-.71.43-1.086 1.136-1.086l.616.094c1.23.283 2.65.427 4.115.427 6.578 0 12.443-2.84 12.443-10.22 0-1.042-.188-1.747-.661-2.884.803.38 1.846.995 2.268.995h1.6v-.003zm-13.007 19.583c1.796.333 2.41.994 2.41 2.177 0 3.833-4.116 4.306-7.095 4.306-4.542 0-6.244-1.086-6.244-3.502 0-2.13.613-3.121 2.035-4.637l8.894 1.656zM135.02 279.5c-2.744 0-4.258-.992-4.258-3.36 0-3.5 2.035-5.535 5.583-5.535 2.839 0 4.212 1.183 4.212 3.498 0 3.502-1.989 5.397-5.537 5.397zm31.757-13.862c-2.65 0-5.013 1.3-7.948 3.616l-.425-1.772h-5.206l-3.642 26.55h6.292l2.745-20.134c1.846-1.135 4.115-2.783 6.055-2.783 2.364 0 3.218 1.141 3.218 3.316 0 .521-.05 2.064-.145 2.631l-2.315 16.97h6.293l2.315-17.108c.096-.8.19-2.119.19-2.874.003-4.5-2.129-8.412-7.427-8.412zm19.38 21.743l.048-.65 2.742-19.249h-10.456l-.659 4.827h4.586c-.379 0-.615.423-.661.804l-1.893 12.82c-.094.617-.14 1.901-.14 2.418 0 3.311 1.796 5.682 5.484 5.682h3.218l.71-4.828h-2.033c-.712 0-.946-1.257-.946-1.824zm4.067-29.554h-6.15c-.379 0-.379-1.393-.425-.92l-.854 6.802c-.049.428-.049 1.36.33 1.36h6.153c.379 0 .379-1.654.425-2.084l.854-5.25c.048-.473.048.092-.333.092zm12.831 29.715c-1.559 0-2.317-.663-2.317-2.08l.048-.097 1.987-13.056h7.19l2.175-4.827h-8.704l1.465-10.623-6.62 2.117-1.185 8.506h-3.831l-.661 4.827h4.446c-.425 2.414-.852.848-.898 1.323l-1.704 11.448c-.094.522-.094.9-.094 1.371 0 4.495 3.311 6.177 7.289 6.177 3.688 0 6.669-1.077 8.989-3.02l-2.935-3.61c-1.47.897-2.462 1.544-4.64 1.544zm23.087-21.904c-8.657 0-12.725 4.113-14.098 13.432-.142 1.137-.237 2.226-.237 3.266 0 6.387 3.264 10.22 10.454 10.22 5.583 0 9.75-2.32 11.97-6.578l-4.777-1.94c-1.37 2.08-3.217 3.5-6.483 3.5-3.498 0-4.92-.942-4.92-4.065 0-.616.051-1.511.146-1.511h17.077c.236-2.414.52-4.12.52-5.535 0-4.728-1.797-10.79-9.652-10.79zm3.266 11.499H219c1.04-2.414 2.788-6.15 6.387-6.15 2.79 0 4.164 1.631 4.164 4.422-.003.473-.049 1.728-.143 1.728zm23.797-11.5c-2.271 0-4.4 1.302-6.53 3.332l-.378-1.487h-5.202l-3.644 26.55h6.34l2.79-20.56c1.657-.991 3.549-1.838 5.347-1.838 1.137 0 2.223-.181 3.263-.04l.809-5.485c-.951-.189-1.897-.471-2.795-.471zM92.54 238.81c-14.32-6.19-27.72-21.922-27.752-38.019-.039-17.55 11.083-32.45 24.916-42.242-1.663 6.283-2.57 12.03 1.55 17.65 3.83 5.225 10.538 7.764 16.872 6.386 14.8-3.24 15.479-19.51 6.705-28.989-8.675-9.387-17.067-19.99-13.765-33.603 1.653-6.824 5.843-13.216 11.151-17.785-4.08 10.722 7.514 21.296 15.153 26.563 13.251 9.138 27.79 16.044 39.974 26.756 12.816 11.258 22.28 26.48 20.369 44.135-2.071 19.136-17.277 32.445-34.333 39.164 36.042-7.955 73.283-35.928 74.046-75.9.632-32.885-21.927-58.193-49.872-72.682l-1.46-.797c.767 1.861 1.018 3.444.989 4.861.25-1.045.42-2.119.468-3.227a15.728 15.728 0 0 1-.512 3.9l.044-.673a16.383 16.383 0 0 1-2.069 4.931l.41-.441c-5.575 9.247-20.668 11.255-28.124 1.68-11.986-15.402.251-32.008 1.963-48.318 2.143-20.441-10.676-40.285-26.57-52.16 8.754 14.161-2.779 32.896-12.006 43.37C101.74 53.523 90.859 62 80.982 71.225c-10.61 9.908-20.81 20.345-29.531 31.974-17.442 23.276-28.12 52.55-20.273 81.588 7.842 29.018 32.978 47.49 61.363 54.022z" fill="#EE4323"></path></g></svg>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path> </g></svg>
            </span>
          </div>
        </div>
      </div>

      <div className="portfolioBars">
        <div className="portfolioBar">
          <div className="portfolioBarText">
            <h3>Mapúa Malayan Colleges Laguna: IoT Machine Problems - Arduino Setups</h3>
            <p>
              <div className="worksImgs">
                <figure>
                  <img src={GuessThePitch} alt="Works6" className="worksImg2" role="link"
                    onClick={() => openInNewTab("https://github.com/Hir0su/Guess-the-Pitch")} />
                  <figcaption>Guess The Pitch Circuit</figcaption>
                </figure>
                <figure>
                  <img src={Earthquake} alt="Works3" className="worksImg2" role="link"
                    onClick={() => openInNewTab("https://github.com/Hir0su/Earthquake-Detection")} />
                  <figcaption>Earthquake Sensor Circuit</figcaption>
                </figure>
              </div>
              <details>
                <summary><span id="off">More Details</span><span id="on">Close</span></summary>
                <p className="paras">
                  Our <b>first project</b> is a product of our use with the arduino microcontroller. It is
                  a simple pitch guessing game where in we use a speaker module for the arduino, we use this
                  speaker to display a random set of sounds and with three buttons, the user has to memorize
                  and recognize the pitches made and replay the sounds as a result of said buttons.
                  We have received replies that the game was actually challenging and fun!
                </p>
                <br /><br />
                <p className="paras">
                  For the <b>second project</b>, we have developed an earthquake detector using a MPU6050 sensor,
                  a module that is a complete 6-axis Motion Tracking Device. It combines 3-axis Gyroscope,
                  3-axis Accelerometer and Digital Motion Processor. Using these along with an arduino uno
                  microcontroller, we were able to receive alarm signals when axis changes and vibrations
                  are detected, which in turn is recorded into our database and displayed in a simple php
                  website that we made as a visual record display.
                </p>
              </details>
            </p>
            <span className="usedLangs">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#009688" d="M35.7,34.7c-7.7,0-13.2-8.9-13.4-9.3l-0.6-1l0.6-1C22.5,22.9,28,14,35.7,14C41.4,14,46,18.6,46,24.3 S41.4,34.7,35.7,34.7z M26.4,24.3c1.5,2,5.1,6.3,9.2,6.3c3.5,0,6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3C31.5,18,27.9,22.3,26.4,24.3 z"></path><path fill="#009688" d="M12.3,34.7C6.6,34.7,2,30,2,24.3S6.6,14,12.3,14c7.9,0,13.2,8.9,13.4,9.3l0.6,1l-0.6,1 C25.5,25.7,20,34.7,12.3,34.7z M12.3,18C8.8,18,6,20.8,6,24.3c0,3.5,2.8,6.3,6.3,6.3c4.2,0,7.8-4.3,9.3-6.3 C20.2,22.3,16.6,18,12.3,18z"></path><path fill="#009688" d="M10 23h6v2h-6V23zM32 23h6v2h-6V23z"></path><path fill="#009688" d="M34,21h2v6h-2V21z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#00549d" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#0086d4" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#0075c0" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clip-rule="evenodd"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <h2 className="worksTitle">My Certificates</h2>
      <span className="worksDesc">
        Certificates I have earned.
      </span>
      <div className="worksImgs">
        <figure>
          <img src={Nse1} alt="Certi1" className="worksImg" />
          <figcaption>Fortinet NSE1 Certificate</figcaption>
        </figure>
        <figure>
          <img src={Nse2} alt="Certi2" className="worksImg" />
          <figcaption>Fortinet NSE2 Certificate</figcaption>
        </figure>
        <figure>
          <img src={Forticerti} alt="Certi3" className="worksImg" />
          <figcaption>Fortinet Cybersecurity Fundamentals Certificate</figcaption>
        </figure>
        <figure>
          <img src={Ciscocerti} alt="Certi4" className="worksImg" />
          <figcaption>Cisco Packet Tracer Certificate</figcaption>
        </figure>
      </div>

      <h2 className="worksTitle">Seminars Attended</h2>
      <span className="worksDesc">
        These are the Seminars I have attended and my thoughts and reflections in paper.<br />
        (Click Them for full View)
      </span>
      <div className="worksImgs">
        <figure>
          <img src={Goldstone} alt="Seminar1" className="worksImg" role="link"
            onClick={() => openInNewTab("https://drive.google.com/file/d/14gMnnKU4hCEOT1PFr15Bm9OZH4dkDudv/view?usp=sharing")} />
          <figcaption>Goldstone’s Webinar on AI in Education<br />&nbsp;</figcaption>
        </figure>
        <figure>
          <img src={LegalpersAI} alt="Seminar2" className="worksImg" role="link"
            onClick={() => openInNewTab("https://drive.google.com/file/d/1JPYHedJAKOLDX1z0NKFvaOFq8ANvC9F5/view?usp=sharing")} />
          <figcaption>Exploring the Legal Perspective of <br />AI Transformation</figcaption>
        </figure>
      </div>
      <br /><br /><br />
    </section>
  );
};

export default Portfolio;
