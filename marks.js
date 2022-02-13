english=60;
social=80;
science=75;
telugu=70;
hindi=75;
if(english>0 && social>0 && science>0 && telugu>0 && hindi>0)
{
   sum=english+social+science+telugu+hindi;
   percentage=(sum/500)*100;
   if(percentage>=90)
       {
        console.log(percentage);
        console.log("O");
       }
    else if(percentage>=75 && percentage<=90)
    {
        console.log(percentage);
        console.log("A");   
    }
    else if(percentage>=40 && percentage<75)
    {
        console.log(percentage);
        console.log("B");
    }
    else
    {
        console.log(percentage);
        console.log("F");
    }
}
else
{
    console.log("Invalid");
}