function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

// function to store menuCardList in local storage

function storeMenuCardList() {
  localStorage.setItem("menuCardList", JSON.stringify(MenuCardList));
}

// function to get menuCardList in local storage

function getMenuCardList() {
  return JSON.parse(localStorage.getItem("menuCardList")) || [];
}
let tableCardList = [
  {
    id: 0,
    tableNumber: 1,
    tableStatus: "open",
    tableTotal: 0,
    tableItems: [],
  },
  {
    id: 1,
    tableNumber: 2,
    tableStatus: "open",
    tableTotal: 0,
    tableItems: [],
  },
  {
    id: 2,
    tableNumber: 3,
    tableStatus: "open",
    tableTotal: 0,
    tableItems: [],
  },
];
let MenuCardList = [
  {
    id: 0,
    name: "Pizza",
    cost: 100,
    type: "mainCourse",
    desc: "A pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven.",
  },
  {
    id: 1,
    name: "Pizza 2",
    cost: 30,
    type: "mainCourse",
    desc: "A pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven.",
  },
  {
    id: 2,
    name: "Pizza 3",
    cost: 50,
    type: "desserts",
    desc: "A pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven.",
  },
];

storeMenuCardList();

const tableCards = document.querySelector(".table-cards");
const menuCards = document.querySelector(".menu-cards");

tableCardList.forEach((tableCard) => {
  const tableCardHtml = `
    <div class="table-card drop" attr-key=${tableCard.id}>
    <h2 class="table-card-title drop" attr-key=${tableCard.id}>Table ${
    tableCard.id + 1
  }</h2>
    <p class="table-card-para drop" attr-key=${
      tableCard.id
    }>Total cost: <span id="total-cost" attr-key=${tableCard.id}>${
    tableCard.tableTotal
  }</span></p>
</div>
    `;
  tableCards.insertAdjacentHTML("beforeend", tableCardHtml);
});
MenuCardList.forEach((menuCard) => {
  const menuCardHtml = `
    <div class="menu-card" draggable="true" attr-key=${menuCard.id}>
                            <button class="edit" attr-key=${menuCard.id}>
                            <img src="./assests/edit.svg" alt="edit-button" class="edit-img edit" attr-key=${menuCard.id}>
        <span class="show-edit" attr-key=${menuCard.id}>edit</span>
                            </button>
                            <button class="delete delete-btn" attr-key=${menuCard.id}>
                            <img src="./assests/delete.svg" alt="edit-button" class="delete-img delete-btn" attr-key=${menuCard.id}>
                            <span class="show-delete" attr-key=${menuCard.id}>delete</span>
                            </button>
                            <h2 attr-key=${menuCard.id}>${menuCard.name}</h2>
                            <p attr-key=${menuCard.id}>Total cost: <span id="total-cost" attr-key=${menuCard.id}>${menuCard.cost}</span></p>
                            <p attr-key=${menuCard.id}>Item type: <span id="item-type" attr-key=${menuCard.id}>${menuCard.type}</span></p>
                            
                        </div>
    `;
  menuCards.insertAdjacentHTML("beforeend", menuCardHtml);
});

const addBtn = document.querySelector(".create-menu-item");

addBtn.addEventListener("click", () => {
  const dialog = document.querySelector(".add-menu-dialog");
  dialog.innerHTML = `
    <form>
        <h2>Add Menu Item</h2>
        <br>
        <label for="item-name">Item Name</label>
        <input required type="text" name="item-name" id="item-name" placeholder="Item Name">
        <br>
        <label for="item-desc">Item Description</label>
        <input required type="text" name="item-desc" id="item-descri" placeholder="Item Description">
        <br>
        <label for="item-price">Item Price</label>
        <input required type="number" name="item-price" id="item-price" placeholder="Item Price">
        <br>
        <label for="item-type">Item Type</label>
        <select name="item-type" id="item-typee" required>
            <option value="">--select item type--</option>
            <option value="entree">entree</option>
            <option value="mainCourse">main course</option>
            <option value="desserts">desserts</option>
            <option value="appetizers">appetizers</option>
            <option value="beverages">beverages</option>
        </select>
        <br>
        <br>
        <button class="add-menu-item" type="submit">Add</button>
        <button class="cancel">Cancel</button>
    </form>
    `;

  const addMenuItemBtn = dialog.querySelector(".add-menu-item");
  const cancelBtn = dialog.querySelector(".cancel");

  addMenuItemBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let itemName = dialog.querySelector("#item-name").value;
    let temp = itemName.split(" ");
    temp = temp.map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    temp = temp.join(" ");
    itemName = temp;
    console.log(temp);
    const itemDesc = dialog.querySelector("#item-descri").value;
    const itemPrice = dialog.querySelector("#item-price").value;
    const itemType = dialog.querySelector("#item-typee").value;

    const newMenuItem = {
      id: MenuCardList.length,
      name: itemName,
      cost: parseInt(itemPrice),
      type: itemType,
      desc: itemDesc,
    };
    MenuCardList.push(newMenuItem);
    const menuCardHtml = `
        <div class="menu-card" draggable="true" attr-key=${
          MenuCardList.length - 1
        }>
                            <button class="edit"  attr-key=${
                              MenuCardList.length - 1
                            }><img src="./assests/edit.svg" alt="edit-button" class="edit-img edit" attr-key=
                            ${MenuCardList.length - 1}
        <span class="show-edit" attr-key=${
          MenuCardList.length - 1
        }edit</span></button>
                            <button class="delete" attr-key=${
                              MenuCardList.length - 1
                            }>
                            <img src="./assests/delete.svg" alt="edit-button" class="delete-img delete-btn" attr-key=${
                              MenuCardList.length - 1
                            }>
                            <span class="show-delete" attr-key=${
                              MenuCardList.length - 1
                            }>delete</span>
                            </button>
                            <h2 attr-key=${MenuCardList.length - 1}>${
      newMenuItem.name
    }</h2>
                            <p attr-key=${
                              MenuCardList.length - 1
                            }>Total cost: <span id="total-cost" attr-key=${
      MenuCardList.length - 1
    }>${newMenuItem.cost}</span></p>
                            <p attr-key=${
                              MenuCardList.length - 1
                            }>Item type: <span id="item-type" attr-key=${
      MenuCardList.length - 1
    }>${newMenuItem.type}</span></p>
                            
                        </div>
        `;
    menuCards.insertAdjacentHTML("beforeend", menuCardHtml);
    filterCardsOnAdd();
    storeMenuCardList();
    dialog.close();
  });

  dialog.showModal();

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });
});

addGlobalEventListener("click", ".edit", (e) => {
  let key = e.target.getAttribute("attr-key");
  key = parseInt(key);
  // console.log({ MenuCardList, key });
  const { name, cost, type, desc } = MenuCardList[key];

  // console.log({ name, cost, type, desc });

  const dialog = document.querySelector(".add-menu-dialog");
  dialog.innerHTML = `
    <form>
        <h2>Add Menu Item</h2>
        <br>
        <label for="item-name">Item Name</label>
        <input type="text" name="item-name" id="item-name" placeholder="Item Name" value="${
          MenuCardList[key].name
        }">
        <br>
        <label for="item-desc">Item Description</label>
        <input type="text" name="item-desc" id="item-descri" placeholder="Item Description" value="${desc}">
        <br>
        <label for="item-price">Item Price</label>
        <input type="number" name="item-price" id="item-price" placeholder="Item Price" value="${cost.toString()}">
        <br>
        <label for="item-type">Item Type</label>
        <select name="item-type" id="item-typee">
            <option value="">--select item type--</option>
            <option value="entree" ${
              type == "entree" ? "selected" : ""
            }>entree</option>
            <option value="mainCourse" ${
              type == "mainCourse" ? "selected" : ""
            }>main course</option>
            <option value="desserts"  ${
              type == "desserts" ? "selected" : ""
            }>desserts</option>
            <option value="appetizers" ${
              type == "appetizers" ? "selected" : ""
            }>appetizers</option>
            <option value="beverages" ${
              type == "beverages" ? "selected" : ""
            }>beverages</option>
        </select>
        <br>
        <br>
        <button class="add-menu-item" type="submit">Edit</button>
        <button class="cancel">Cancel</button>
    </form>
    `;
  dialog.showModal();

  const addMenuItemBtn = dialog.querySelector(".add-menu-item");
  const cancelBtn = dialog.querySelector(".cancel");

  addMenuItemBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const itemName = dialog.querySelector("#item-name").value;
    const itemDesc = dialog.querySelector("#item-descri").value;
    const itemPrice = dialog.querySelector("#item-price").value;
    const itemType = dialog.querySelector("#item-typee").value;

    const newMenuItem = {
      id: parseInt(key),
      name: itemName,
      cost: parseInt(itemPrice),
      type: itemType,
      desc: itemDesc,
    };
    MenuCardList[key] = newMenuItem;
    // console.log(MenuCardList);
    const menuCardHtml = `
    <button class="edit" attr-key=${key}>
    <img src="./assests/edit.svg" alt="edit-button" class="edit-img edit" attr-key=${key}>
<span class="show-edit" attr-key=${key}>edit</span>
    </button>
    <button class="delete delete-btn" attr-key=${key}>
    <img src="./assests/delete.svg" alt="edit-button" class="delete-img delete-btn" attr-key=${key}>
    <span class="show-delete" attr-key=${key}>delete</span>
    </button>
                            <h2 attr-key="${key}">${newMenuItem.name}</h2>
                            <p attr-key="${key}">Total cost: <span id="total-cost" attr-key="${key}">${newMenuItem.cost}</span></p>
                            <p attr-key="${key}">Item type: <span id="item-type" attr-key="${key}">${newMenuItem.type}</span></p>
                            
        `;
    menuCards.children[key].innerHTML = menuCardHtml;
    storeMenuCardList();
    dialog.close();
  });

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });
});

addGlobalEventListener("click", ".delete-btn", (e) => {
  // console.log("das");
  e.target.parentElement.parentElement.remove();
});

const filterMenuCards = document.querySelector("#select-menu");

filterMenuCards.addEventListener("change", (e) => {
  const menuCards = document.querySelectorAll(".menu-card");
  menuCards.forEach((card) => {
    const cardType = card.querySelector("#item-type").innerText;
    if (cardType == e.target.value || e.target.value == "all") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

function filterCardsOnAdd() {
  const menuCards = document.querySelectorAll(".menu-card");
  // console.log(filterMenuCards.value);
  menuCards.forEach((card) => {
    const cardType = card.querySelector("#item-type").innerText;
    if (cardType == filterMenuCards.value || filterMenuCards.value == "all") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// drag and drop

addGlobalEventListener("dragstart", ".menu-card", (e) => {
  e.dataTransfer.setData("text/plain", e.target.getAttribute("attr-key"));
});

addGlobalEventListener("dragover", ".drop", (e) => {
  e.preventDefault();
});

addGlobalEventListener("drop", ".drop", (e) => {
  e.preventDefault();
  const key = e.dataTransfer.getData("text/plain");
  // console.log(key, MenuCardList);
  const tablekey = e.target.getAttribute("attr-key");
  const menuObj = MenuCardList[key];
  // console.table(menuObj.name, menuObj.cost, tablekey, tableCardList[tablekey]);

  if (
    tableCardList[tablekey].tableItems.find(
      (item) => item.name == menuObj.name
    ) === undefined
  ) {
    tableCardList[tablekey].tableItems.push({
      name: menuObj.name,
      cost: menuObj.cost,
      individualCost: menuObj.cost,
    });
    // console.log(tableCardList);
  } else {
    tableCardList[tablekey].tableItems.forEach((item) => {
      if (item.name == menuObj.name) {
        item.cost += menuObj.cost;
      }
    });
  }

  const totalcost = document.querySelector(
    `#total-cost[attr-key="${tablekey}"]`
  );
  totalcost.innerText = parseInt(totalcost.innerText) + menuObj.cost;

  // tableCardList[tablekey].tableItems.push({ name: menuObj.name, cost: menuObj.cost });
  // console.log(tableCardList);
});

//table card

addGlobalEventListener("click", ".drop", (e) => {
  const dialog = document.querySelector(".show-table-data");
  const tablekey = e.target.getAttribute("attr-key");
  const tablearr = tableCardList[tablekey];
  const tablecardcolor = document.querySelector(
    `.table-card[attr-key="${tablekey}"]`
  );

  if (tablearr.tableItems.length == 0) {
    alert("No items in the table");
    return;
  }

  tablecardcolor.style.backgroundColor = "yellow";
  dialog.innerHTML = `
        <div class="bill-heading">
            <h1 class="bill-heading-text">

                Table - 1 | Order details
            </h1>
            <img src="./assests/close.svg" alt="close-icon" class="cancel">
        </div>
        <div class="table-data-container">
        <div class="table-data" attr-table-key="${tablekey}">
                <div class="sno bold">sno</div>
                <p class="bold"> name</p>
                <p class="bold">quantity</p>
                <p id="cost-display" class="bold"> cost</p>
                <!-- <button class="update-item" attr-table-key="${tablekey}">update</button>
                <button class="delete-item">delete</button> -->
                <br>
            </div>
                </div>
                <div class="generate-bill-btn-container">

            <button class="genrate-bill bold">
                Close Session (generate bill)
            </button>
        </div>
    `;
  let cnt = 0;
  tablearr.tableItems.forEach((item) => {
    const quantity = Math.floor(item.cost / item.individualCost);
    // console.log(quantity);
    const showTableHtml = `
        <div class="table-data" attr-table-key="${tablekey}">
                <div class="sno">${cnt++}</div>
                <p id="item-name">${item.name}</p>
                <label for="quantity">
                    <input type="number" value="${quantity}" id="input-quantity">
                </label>
                <p id="cost-display"> ${item.cost}</p>
                <button class="update-item" attr-table-key="${tablekey}">update</button>
                <img class="delete-item" src="./assests/delete.svg" alt="delete-icon">
                <br>
            </div>
    `;
    const container = document.querySelector(".table-data-container");
    container.insertAdjacentHTML("beforeend", showTableHtml);
  });

  const tableHead = document.querySelector(".bill-heading-text");
  tableHead.innerText = `Table - ${parseInt(tablekey) + 1} | Order details`;

  dialog.showModal();

  const cancelBtn = dialog.querySelector(".cancel");
  cancelBtn.addEventListener("click", (e) => {
    tablecardcolor.style.backgroundColor = "white";
    e.preventDefault();
    dialog.close();
  });

  const generateBill = dialog.querySelector(".genrate-bill");
  generateBill.addEventListener("click", (e) => {
    e.preventDefault();
    tablecardcolor.style.backgroundColor = "white";
    console.log(e.target.parentElement);
    e.target.parentElement.parentElement.close();
    const dialog = document.querySelector(".show-bill");
    const billarr = tablearr.tableItems;
    dialog.innerHTML = ``;
    console.log(billarr);
    billarr.forEach((item) => {
      const billHtml = `
            <div class="bill-data">

                <h3>${item.name}</h3>
                <p>cost ${item.cost}</p>
                <br>
        </div>
        `;

      dialog.insertAdjacentHTML("afterbegin", billHtml);
    });
    const totalcost = document.querySelector(
      `#total-cost[attr-key="${tablekey}"]`
    );
    const totalcostHtml = `
        <div class="bill-data">

            <h3>Total Cost</h3>
            <p>cost ${totalcost.innerText}</p>
            <br>
    </div>
    `;
    dialog.insertAdjacentHTML("afterbegin", totalcostHtml);
    dialog.insertAdjacentHTML(
      "beforeend",
      `<button class="cancel">close</button>`
    );

    const cancelBtn = dialog.querySelector(".cancel");
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(tablekey);
      // const tablecardcolor = document.querySelector(`.table-card[attr-key="${tablekey}"]`);
      // tablecardcolor.style.backgroundColor = "white";
      dialog.close();
      tablearr.tableItems = [];
      totalcost.innerText = "0";
    });

    dialog.showModal();
  });
});

addGlobalEventListener("click", ".update-item", (e) => {
  e.preventDefault();
  const inputQuantity =
    e.target.parentElement.querySelector("#input-quantity").value;
  // console.log(inputQuantity);
  const tablekey = e.target.getAttribute("attr-table-key");
  const tablearr = tableCardList[tablekey];
  const costDisplay = e.target.parentElement.querySelector("#cost-display");
  console.log(e.target.parentElement);
  const itemName = e.target.parentElement.querySelector("#item-name").innerText;

  const newCost =
    parseInt(inputQuantity) *
    tablearr.tableItems.find((item) => item.name == itemName).individualCost;

  // console.log(newCost, parseInt(inputQuantity), tablearr.tableItems.find((item) => item.name == itemName).individualCost);

  // console.log(costDisplay);
  costDisplay.innerText = `${newCost}`;
  const totalcost = document.querySelector(
    `#total-cost[attr-key="${tablekey}"]`
  );
  // totalcost.innerText = newCost;

  tablearr.tableItems.forEach((item) => {
    if (item.name == itemName) {
      item.cost = newCost;
      // console.log(tableCardList);
    }
  });
  let total = 0;
  console.log(tableCardList);
  tableCardList[tablekey].tableItems.forEach((item) => {
    total += item.cost;
  });

  totalcost.innerText = total;
});

addGlobalEventListener("click", ".delete-item", (e) => {
  e.preventDefault();
  const tablekey = e.target.parentElement.getAttribute("attr-table-key");
  const tablearr = tableCardList[tablekey];
  const itemName = e.target.parentElement.querySelector("#item-name").innerText;
  const cost = tablearr.tableItems.find((item) => item.name == itemName).cost;
  tablearr.tableItems = tablearr.tableItems.filter(
    (item) => item.name != itemName
  );
  // console.log(tableCardList);
  e.target.parentElement.remove();

  const totalcost = document.querySelector(
    `#total-cost[attr-key="${tablekey}"]`
  );
  totalcost.innerText =
    parseInt(totalcost.innerText) - cost > 0
      ? parseInt(totalcost.innerText) - cost
      : 0;
});

const tableSearch = document.querySelector("#table-search");
tableSearch.addEventListener("keyup", (e) => {
  const tableCards = document.querySelectorAll(".table-card");
  tableCards.forEach((card) => {
    const cardName = card.children[0].innerText;
    console.log(cardNumber);
    if (cardName.toLowerCase().includes(e.target.value.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
const menuSearch = document.querySelector("#menu-search");
menuSearch.addEventListener("keyup", (e) => {
  const menuCards = document.querySelectorAll(".menu-card");
  menuCards.forEach((card) => {
    // console.log(card.children[2].innerText);
    const cardName = card.children[2].innerText;
    const cardType = card.querySelector("#item-type").innerText;
    console.log(card, "-----------", cardType);

    if (
      cardName.toLowerCase().includes(e.target.value.toLowerCase()) ||
      cardType.toLowerCase().includes(e.target.value.toLowerCase())
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
