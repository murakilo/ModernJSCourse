const card = document.querySelector('.card');
const form = document.getElementById('loan-form');

// Listen for submit
document.getElementById('loan-form').addEventListener('submit', async function(e){
  // hide results
  document.getElementById('results').style.display = 'none';
  // show loader
  document.getElementById('loading').style.display = 'block';

  await setTimeout(calculateResults, 1000);

  e.preventDefault();
});

// Calculate results
function calculateResults() {
  //e.preventDefault();

  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPmnt = document.getElementById('monthly-pmnt');
  const totalPmnt = document.getElementById('total-pmnt');
  const totalIntrst = document.getElementById('total-intrst');

  const principal = parseFloat(amount.value);
  const calculatedIntrst = parseFloat(interest.value) / 100 / 12; // value from 0-1 per month
  const totalMonths = parseFloat(years.value) * 12;

  // Compute monthly payments
  const x = Math.pow( 1 + calculatedIntrst, totalMonths );
  const monthly = ( principal * x * calculatedIntrst ) / ( x - 1 );

  if (isFinite(monthly)) {
    monthlyPmnt.value = monthly.toFixed(2);
    totalPmnt.value = ( monthly * totalMonths ).toFixed(2);
    totalIntrst.value = ( ( monthly * totalMonths ) - principal ).toFixed(2);

    document.getElementById('results').style.display = 'block';
  } else {
    showError('Error: please check inputs.')
  }

  document.getElementById('loading').style.display = 'none';
}

async function showError(error) {
  const errorDiv = document.createElement('div');
  errorDiv.id = 'errorDiv';
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  // calculate what the height of div will be
  errorDiv.style.visibility = 'hidden';
  document.body.appendChild(errorDiv);
  const divHeight = errorDiv.offsetHeight;
  errorDiv.remove();
  errorDiv.style.visibility = 'visible';

  // Move form down calculated height
  await moveFormDown(divHeight);
  
  // display error
  card.insertBefore(errorDiv, form);
  
  // Fade error away
  setTimeout(clearAlert, 3000);

  // Move form back to original height
  moveFormUp(divHeight);

  //   msg = msg + '.';
  // }
}

// fades alert away
async function clearAlert() {
  const alert = document.querySelector('.alert');
  var opac = 1;
  while (opac > 0) {
    alert.style.opacity = opac;
    opac = opac - 0.05;
    await new Promise(r => setTimeout(r, 100));
  }
  alert.remove();
}

// moves elements down dynamically to height specified
async function moveFormDown(divHeight) {
  const divX = document.createElement('div');
  divX.style.width = '100%';
  divX.style.clear = 'both';

  var height = 0;
  while (height < divHeight) {
    divX.remove();
    console.log(height + 'px');
    divX.style.height = height + 'px';
    card.insertBefore(divX, form);
    height = height + 2;
    await new Promise(r => setTimeout(r, 1));
  }
  divX.remove();
}

// moves elements up dynamically to height specified
async function moveFormUp(divHeight) {
  const divX = document.createElement('div');
  divX.style.width = '100%';
  divX.style.clear = 'both';

  var height = divHeight;
  while (height > 0) {
    divX.remove();
    console.log(height + 'px');
    divX.style.height = height + 'px';
    card.insertBefore(divX, form);
    height = height - 2;
    await new Promise(r => setTimeout(r, 1));
  }
  divX.remove();
}