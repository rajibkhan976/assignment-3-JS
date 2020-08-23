document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
	  
	var resultOne = document.getElementById('result-1');
	var resultTwo = document.getElementById('result-2');
	function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
	}

	function fightCorona() {
		return new Promise((resolve) => {
			setTimeout(() => resolve('Fighting Corona'), 1000);
		})
	}

	async function execute() {
		await wearPPE().then(result => console.log(result));
		await fightCorona().then(result => console.log(result));
		resultOne.innerHTML = await wearPPE().then(result => result);
		resultTwo.innerHTML = await fightCorona().then(result => result);
	}

	execute();

  }
}