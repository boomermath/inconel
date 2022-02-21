module.exports = {
    "Inspect Element": {
        description: "Inspect the element you're currently hovering over.",
        code: `(function(){var a=document.createElement("script");a.src="https://x-ray-goggles.mouse.org/webxray.js";a.className="webxray";a.setAttribute("data-lang","en-US");a.setAttribute("data-baseuri","https://x-ray-goggles.mouse.org");document.body.appendChild(a);}());`,
    },
    "Inspect Element (Firebug)": {
        description: "Inspect a webpage using Firebug.",
        code: `var firebug=document.createElement('script');firebug.setAttribute('src','https://luphoria.com/fbl/fbl/firebug-lite-debug.js');document.body.appendChild(firebug);(function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();void(firebug);`,
    },
    "Google Drive Cloak": {
        description: "Cloak your tab as Google Drive.",
        code: `(function(){var a=document.querySelector("link[rel*='icon']")||document.createElement("link");a.type="image/x-icon",a.rel="shortcut icon",a.href="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png",document.title="My Drive - Google Drive",console.log(document.title),document.getElementsByTagName("head")[0].appendChild(a)})();`,
    },
    "Google Drive Cloak (Refresh)": {
        description: "Cloak your tab as Google Drive, the cloak refreshes every second.",
        code: `function gcloak(){var a=document.querySelector("link[rel*='icon']")||document.createElement("link");a.type="image/x-icon",a.rel="shortcut icon",a.href="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png",document.title="My Drive - Google Drive",console.log(document.title),document.getElementsByTagName("head")[0].appendChild(a)}gcloak(),setInterval(gcloak,1e3);`,
    },
    "Porta Proxy": {
        description: "Proxy a webpage via an iframe.",
        code: `(function(){var a=document.getElementById("rusic-modal")||document.createElement("iframe");a.setAttribute("allow","fullscreen");a.src="https://example.com";a.id="rusic-modal";a.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";document.body.appendChild(a);}());`,
    },
    "Youtube - No Cookie": {
        description: "Go to a youtube webpage and use this bookmark to watch the video privately.",
        code: "(h=>{/youtube/.test(h+=location)?location=`//www.youtube-nocookie.com/embed/${[h.match`(?<=[ve]/|u/\w+/|embed/|v=)[^%23&?]*`]}?autoplay=1`:0})``",
    }
}