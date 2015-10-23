var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
rectangle.setWidth = function (newWidth) {
 this.width = newWidth;
};
  
rectangle.setHeight(6);
rectangle.setWidth(8);