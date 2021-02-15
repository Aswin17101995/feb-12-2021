//Print odd numbers in an array 
var result=function(a)
{
    var ans=[];
    for(var i in a)
    {
        if(a[i]%2===0)
        {
            ans.push(a[i]);
        }
    }
    return ans;
};
console.log(result([1,2,3,4,5]));


//Convert all the strings to title caps in a string array
var result=function(a)
{
    var ans=[];
    for(var i in a)
    {
        ans[i]=a[i].toUpperCase();
    }
    return ans;
};
console.log(result(["aswin","srini","mass","weight"]));

// Sum of all numbers in an array 
var result=function(a)
{
    var ans=0
    for(var i in a)
    {
        ans+=a[i];
    }
    return ans;
};
console.log(result([1,2,3,4,5]));

//Return all the prime numbers in an array
var result=function(a)
{
    var ans=[];
    
    for(var i in a)
    {
        var count=0;
        for(var j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            ans.push(a[i]);
        }
    }
    return ans;
};
console.log(result([1,2,3,4,5]));


// Return all the palindromes in an array
var result=function(a)
{
    var ans=[];
    for(var i in a)
    {
        var str=a[i];
        var maxlen=a[i].length;
        var len=Math.floor(a[i].length/2);
        var check=0;
        for(var j=0;j<len;j++)
        {
            if(str[j]===str[maxlen-1-j])
            {
                continue;
            }
            else
            {
                check=-1;
                break;
            }
        }
        if(check!=-1)
        {
            ans.push(str);
        }
    }
    return ans;
};
console.log(result(["1221","0000","anna","rotator"]));

//Return median of two sorted arrays of same size 
var result=function(a,b)
{
   var c=a[a.length-1];
   var d=b[0];
   return c+d;
};
console.log(result([1,2,3],[4,5,6]));

//Remove duplicates from an array 
var result=function(a)
{
    
    a.sort();
    console.log(a);
    var x=[];
    for(var i=0;i<a.length;)
    {
        var temp;
        var count=0;
        for(var j=i+1;j<a.length;j++)
        {
            console.log("key",a[i]," ","compared to",a[j]);
            if(j<a.length)
            {
            if(a[i]==a[j])
            {
                count++;
                temp=j;
                
            }
            else
            {
                break;
            }
            }
            
        }
        if(count===0)
        {
            console.log("key added",a[i]);
            x.push(a[i]);
            i++;
        }
        else
        {
            console.log(a[i],"repeated");
            i=temp+1;
            console.log(i,"index");
        }
    }
    return x;
};
console.log(result([1,3,3,3,3,3,5,5,5,5,7,7,7,9]));


//Rotate an array by k times and return the rotated array
var result=function(a,b)
{
    var temp=0;
    for(var i=0;i<b;i++)
    {
        temp=a[0];
        a[0]=a[a.length-1];
        
        for(var j=a.length-1;j>0;j--)
        {
            if(j-1===0)
            {
                a[1]=temp;
            }
            else
            {
             a[j]=a[j-1];
            }
           
            
        }
    }
    return a;
};
console.log(result([1,2,3,4,5,6,7,8,9],2));