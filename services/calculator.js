function calculatePrice() {
    const siteType = document.getElementById("siteType").value;
    const pageCount = parseInt(document.getElementById("pageCount").value);
    const customDesign = document.getElementById("customDesign").checked;
  
    let basePrice = 0;
    switch (siteType) {
      case "business":
        basePrice = 1000;
        break;
      case "store":
        basePrice = 2000;
        break;
      case "blog":
        basePrice = 1500;
        break;
    }
  
    const extraPages = pageCount > 1 ? (pageCount - 1) * 200 : 0;
    const designFee = customDesign ? 1000 : 0;
  
    const total = basePrice + extraPages + designFee;
    document.getElementById("priceResult").innerText = `Total price: ${total} ₪`;
  }
  
  function resetForm() {
    document.getElementById("siteType").value = "business";
    document.getElementById("pageCount").value = 1;
    document.getElementById("customDesign").checked = false;
    document.getElementById("priceResult").innerText = "";
  }
  