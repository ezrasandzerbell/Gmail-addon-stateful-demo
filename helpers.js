function getObjectByID(objects, id) {
  for (var i=0; i<objects.length; i++){
    if (objects[i].id === id){
      return objects[i]
    }
   }
}

