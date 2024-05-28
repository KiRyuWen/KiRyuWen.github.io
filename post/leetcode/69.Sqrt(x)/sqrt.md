---
author: Wen-Yi,Lo
title: Sqrt(x)
date: 2022-02-01
description: LeetCode problem
math: false
categories: 
    - Leetcode
tags:
    - Leetcode
---

## brute force

```
iterate over to x/2 to find final solution
try all possible!

from i <- 1 to x/2  
    if i*i > x 
        return i-1
    else if i*i == x
        return i
    else
        i = i + 1
```
## Using Newton's method
```
we first guess x/2 is the root  
if is not we iterate until the error is less than 10^-5.
原理是，我看影片學的，
x*a/x = a = sqrt(a)*sqrt(a)
如果x<sqrt(a) 那a/x > sqrt(a)
如果x>sqrt(a) a/x < sqrt(a)
那要找到root就是讓兩者相等 x = a/x 所以讓他們越來越靠近使用平均
(x+a/x)/2  當成下一次的guess 讓x-a/x的誤差越來越小

guess <- x/2
xn_1 <- (guess+x/guess)/2

while (xn_1-guess) > 10^-5:
    guess <- xn_1
    xn_1 <- (guess+x/guess)/2

return guess

```



## binary search method(don't know why is working)

```
因為數字的sqrt 不會大於數字/2，利用這個關係
只要一直計算一半一半(因為是int)直到等於x 或是大於x就找到答案了

//needed to careful overflow!!
left  <- 1
right <- x
from left <= right
    mid = (left+right)/2
    if mid*mid == x
        return mid
    else if mid*mid > x
        right = mid -1
    else
        left = mid+1
return right
```