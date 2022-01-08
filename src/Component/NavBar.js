function NavBar() {
  return (
    <>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              Spring-boot Example
            </a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="http://ec2-3-137-215-86.us-east-2.compute.amazonaws.com:8080/">
                  Home
                </a>
              </li>
              <li>
                <a href="https://github.com/micheliknechtel/order-request-manager">
                  Git Repository
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/micheliknechtel/">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
export default NavBar;
