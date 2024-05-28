---
author: Wen-Yi,Lo
title: Merge Sorted Array
date: 2022-02-02
description: LeetCode problem 
math: false
categories: 
    - Leetcode
tags:
    - Leetcode
---

## first thought

insertion sort!

but needs to careful insert pos!  
//O(n*m)
```
a = [1,2,3,0,0,0]
m = a's elements count
b = [4,5,6]
n = b's elements count
from i <- n to 0:
    start <- m-1
    while a[start] > b [i]:

        //move the a[start] to a[start+1]
        a[start+1] = a[start]    

        //move the start pointer to find the insert point
        start-=1

    //when leave the loop
    //the insert point will be shift one more
    //ex [3,0],[1]
    //To become [1,3], first point it at [3] then move it become [3,3]
    //then we shift the pointer to pointer -1
    //will point it to "here"[3,3]
    //so careful!

    a[start+1] = b[i]
    
    //then add up nums1 size
    ++m
```
## second thought (pointer solution)
I had looked someone's code but get the concept then code it myself  
O(m+n)
```
m <- nums1's elements count
n <- nums2's elements count
i <- m - 1
j <- n - 1
k <- m+n-1
a = nums1
b = nums2


while i > 0 and j >0:
    if a[i] > b[j]:
        //move the elements to the pos
        nums1[k] = nums1[i]
        --i
    else
        nums1[k] = nums2[j]
        --j
    --k
//only care about nums2
//because nums1 already inside it and sorted
while j > 0:
    nums1[k] = nums2[j]
    --j
    --k

```

[Here is my LeetCode post](https://leetcode.com/problems/merge-sorted-array/discuss/1738129/Two-solution!-with-comment)