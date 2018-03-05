(() => {
  //cms handler stub
  console.log('cms handler loaded');

  let submitButton = document.querySelector('.add-data');
    function addRecord() {
      event.preventDefault(); //kill the default submit action
      debugger;
    }
    submitButton.addEventListener('click', addRecord);
})();
