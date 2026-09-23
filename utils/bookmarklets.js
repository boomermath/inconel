const bookmarklets = {
  "Inspect Element": {
    description: "Inspect the element you're currently hovering over.",
    code: `(function(){var a=document.createElement("script");a.src="https://x-ray-goggles.mouse.org/webxray.js";a.className="webxray";a.setAttribute("data-lang","en-US");a.setAttribute("data-baseuri","https://x-ray-goggles.mouse.org");document.body.appendChild(a);}());`,
  },
  "Google Drive Cloak": {
    description: "Cloak your tab as Google Drive.",
    code: `(function(){var a=document.querySelector("link[rel*='icon']")||document.createElement("link");a.type="image/x-icon",a.rel="shortcut icon",a.href="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png",document.title="My Drive - Google Drive",console.log(document.title),document.getElementsByTagName("head")[0].appendChild(a)})();`,
  },
  "Google Docs Cloak": {
    description: "Cloak your tab as Google Docs.",
    code: `(function(){var a=document.querySelector("link[rel*='icon']")||document.createElement("link");a.type="image/x-icon",a.rel="shortcut icon",a.href="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico",document.title="Untitled document - Google Docs",document.getElementsByTagName("head")[0].appendChild(a)})();`,
  },
  "Porta Proxy": {
    description: "Proxy a webpage via an iframe. You will be asked for a URL.",
    code: `(function(){var u=prompt("Enter a URL to proxy:");if(!u)return;if(!/^https?:\\/\\//i.test(u))u="https://"+u;try{new URL(u)}catch(e){alert("Invalid URL");return}var a=document.getElementById("rusic-modal")||document.createElement("iframe");a.setAttribute("allow","fullscreen");a.src=u;a.id="rusic-modal";a.style="position:fixed;width:100vw;height:100vh;top:0;left:0;right:0;bottom:0;z-index:2147483647;background-color:white;border:none;";document.body.appendChild(a);}());`,
  },
  "Edit Page": {
    description: "Toggle design mode so you can edit text on the current page.",
    code: `(function(){document.designMode=document.designMode==="on"?"off":"on";}());`,
  },
  "Youtube - No Cookie": {
    description: "Go to a YouTube webpage and use this bookmark to watch the video privately.",
    code: "(h=>{/youtube/.test(h+=location)?location=`//www.youtube-nocookie.com/embed/${[h.match`(?<=[ve]/|u/\\w+/|embed/|v=)[^%23&?]*`]}?autoplay=1`:0})``",
  },
};

export default bookmarklets;
