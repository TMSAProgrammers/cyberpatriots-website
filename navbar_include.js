// Include stylesheet
document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"CSS/navbar.css\">");

// Include navbar
document.write(
    "<!-- Navbar -->" +
    "<div id=\"navbar\">" +
        "<a href=\"home.html\">" +
            "<button>Home</button>" +
        "</a>" +
        "<a href=\"calendar.html\">" +
            "<button>Calendar</button>" +
        "</a>" +
        "<a href=\"members.html\">" +
          "<button>Members</button>" +
        "</a>" +
        "<a href=\"resources.html\">" +
          "<button>Resources</button>" +
        "</a>" +
        "<a>" +
            "<button onclick=\"snackbar()\">Blog</button>" +
        "</a>" +
        "<div id=\"snackbar\">This has yet to be completed</div>" +
    "</div>");