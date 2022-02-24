const content = document.querySelector('#content');

for (let i = 1; i <= 100; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList.add(
    'rounded-pill',
    'mb-3',
    'd-flex',
    'justify-content-center',
    'align-items-center'
  );

  if (i % 3 === 0 && i % 5 === 0) {
    newDiv.innerHTML = '<h5 class="fw-bold"> FizzBuzz</h5 > ';
    newDiv.classList.add('bg-primary');
  } else if (i % 3 === 0) {
    newDiv.innerHTML = '<h5 class="fst-italic">Fizz</h5>';
    newDiv.classList.add('bg-danger');
  } else if (i % 5 === 0) {
    newDiv.innerHTML = '<h5 class="text-decoration-underline">Buzz</h5>';
    newDiv.classList.add('bg-warning');
  } else {
    newDiv.innerHTML = '<h5>' + i + '</h5>';
    newDiv.classList.add('bg-white');
  }

  content.appendChild(newDiv);
}
