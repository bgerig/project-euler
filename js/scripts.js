//Multiple of 3
function multiple3 ()
{
  var target = document.getElementById("input-problem-1").value;

  if (target <= 1000)
  {
    var sum = 0;
    for (var i = 0; i < target; i++)
    {
      if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    document.getElementById("result-1").innerHTML = sum;
  }
  else 
  {
    document.getElementById("result-1").innerHTML = "Enter a number below 1000";
  }

}

// Fibonacci Sequence
function fibonacci ()
{
  var limit = document.getElementById("input-problem-2").value;

  if (limit <= 100)
  {
    var terms = [1,2];

    for (var i = 0; terms.length < limit; i++)
    {
      var sum = terms[i] + terms[i+1];
      terms.push(sum);
    }

    document.getElementById("result-2").innerHTML = terms.pop();
  }
  else 
  {
    document.getElementById("result-2").innerHTML = "Enter a number below 100";
  }
}

//Prime factors
function largestPrimeFactor ()
{
  var limit = document.getElementById("input-problem-3").value;

  if (limit <= 600851475143)
  {
    var primes = [];
    var half = Math.floor(Math.sqrt(limit));
    
    for (var i = 2; i <= half; i++)
    {
      if (limit % i === 0 )
      {
        primes.push(i);
        limit /= i;
      }
    }
    document.getElementById("result-3").innerHTML = primes.pop();
  }
  else 
  {
    document.getElementById("result-3").innerHTML = "Enter a number below 100";
  }
}