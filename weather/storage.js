class Storage {

  setStor(city) {
    
    let citys;
    
    citys = localStorage.getItem('citys');
 
    citys = city;
    
    localStorage.setItem('citys', citys);
 
  }

  getStor() {
    let citys;

    citys = localStorage.getItem('citys');
    
    return citys;

  }
}
  