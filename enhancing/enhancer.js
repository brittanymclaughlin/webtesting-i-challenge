module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return (item.enhancement === 20) ? item : 
    { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
  if(item.enhancement < 15){
    return {...item, durability: item.durability - 5}
  }else if(item.enhancement >= 15){
    if(item.enhancement <=16){
      return {...item, durability: item.durability - 10};
    }else if(item.enhancement > 16){
      return {...item, enhancement: item.enhancement -1, durability: item.durability - 10}
    }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if(item.enhancement === 0){
    return item;
  }else{
    item.name = `[+${item.enhancement}]` + item.name;
    return item
  }
}