export class ConfirmationBox {
  constructor() {
    this.text = "Dialog Box";
    this.block_styles={
      height:"100%",
      width:"100vw",
      // background:"red",
      backdropFilter:"blur(1px)",
      position:"absolute",
      top:"0",
      'z-index':"1"
    }
    this.askDefaultStyle = {
      'z-index':"2",
      position: "absolute",
      background: "grey",
      padding: "10px",
      height: "100px",
      width: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      border: "1px solid white",
    };
    this.formDefault = {
      position: "relative",
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
    };
    this.buttonDefault = {
      width: "50px",
      height: "30px",
    };

    this.x_position = 0;
    this.y_position = 0;
    this.box = "";
    this.block=''
    this.width = 200;
    this.yesCallback = () => true;
    this.noCallback = () => false;
  }

  // method to create the dialog box
  createConfirmationBox() {
    let box = document.createElement("div");
    this.addStyles(box, this.askDefaultStyle);
    box.style.top = `${this.y_position}px`;
    box.style.left = `${this.x_position}px`;
    this.width=box.style.width
    box.id = "confirmation";
    // message//
    let message = this.paragraph(this.text);
    box.appendChild(message);
    // buttons//
    let form = document.createElement("form");
    this.addStyles(form, this.formDefault);
    let yes = document.createElement("input");
    yes.type = "button";
    yes.value = "YES";
    // call backs//
    yes.addEventListener("click", () => this.handleYes());
    this.addStyles(yes, this.buttonDefault);
    form.appendChild(yes);
    let no = document.createElement("input");
    no.type = "button";
    no.value = "NO";
    no.addEventListener("click", () => this.handleNo());
    this.addStyles(no, this.buttonDefault);
    form.appendChild(no);
    box.appendChild(form);

    this.width = box.style;
    this.box = box;
    return box;
  }

  handleYes() {
    return this.yesCallback();
  }

  handleNo() {
    return this.noCallback();
  }

  addStyles(element, styles) {
    for (let [property, value] of Object.entries(styles)) {
      element.style[property] = value;
    }
  }

  setMessage(text) {
    this.text = text;
    return text;
  }
  paragraph(text) {
    let p = document.createElement("p");
    p.innerText = text;
    return p;
  }
  setYesCallback(callback) {
    return (this.yesCallback = callback);
  }

  setNoCallback(callback) {
    return (this.noCallback = callback);
  }
  setPosition(x, y) {
    this.x_position = x + 120;
    this.y_position = y;
    return x, y;
  }
  getBox() {
    return this.createConfirmationBox();
  }

  createBlock(){
    let div=document.createElement("div");
    this.addStyles(div,this.block_styles);
    this.block=div
    return div
  }
  removeBox() {
    if (this.box && this.box.parentNode) {
      this.block.remove()
      return this.box.parentNode.removeChild(this.box);
    }
  }
}
