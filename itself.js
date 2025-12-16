const sender = {
    name: "Tom",
    address: "123 Main St"
}

const deliveryPackage = {
    contents: "porridge",
    sender: sender,
}

const trackingInfo = {
    sender: sender,
    status: "in transit"
}

// console.log("sender: ", sender);
// console.log("deliveryPackage: ", deliveryPackage);
// console.log("trackingInfo: ", trackingInfo);

// sender.name = 'Jerry';

// console.log("sender: ", sender);
// console.log("deliveryPackage: ", deliveryPackage);
// console.log("trackingInfo: ", trackingInfo);

// console.log("package.sender.name: ", deliveryPackage.sender.name);
// console.log("trackingInfo.sender.name: ", trackingInfo.sender.name);