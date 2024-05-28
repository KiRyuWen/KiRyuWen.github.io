---
author: Wen-Yi,Lo
title: Master method
date: 2022-02-05
description: Recursion analysis
math: false
categories: 
    - Algorithm
    - Self-Learning
tags:
    - Algorithm
    - Self-Learning
---

## Motivation
Using this tool can help us to analyze the recursion problem, divided and conquer to find who is quicker!  
We care about more upper bound -> big oh  

### Recursion algorithm
1. T(1) -> base case  
2. n>1 T(n)<= aT(n/b)+O(what)  

## Master method (Master theorem)
### Assumption
black box for solving recurrences.  
All subproblems have equal size. ex merge sort 每個都分成n/2  
**如果有不同size的recursion call 就要用別的方法 不是master method**

1. Base case T(n)<= a constant for all sufficiently small n  
2. For all larger n -> T(n) <= aT(n/b)+O(n^d)  
a is number of recursive calls  
b is split into how many pieces 最好是Strictly bigger than 1 最終會停止recursion  
d is combine step 花多少時間. 老師解釋 exponent in running time of "combine step"  
a, b, d 都是跟size獨立開 沒有關聯
### Cases
T(n) = 
1. if a = b^d -> O(n^dlogn) base is ignored  
2. if a < b^d -> O(n^d) 最好懂 因為O(n^d) 是除了recursive call之外做的事 如果n^d大於call的次數 代表他花的絕大時間都在做額外事情
3. if a > b^d -> O(n^(logb(a)))  number of leaves 的比例 ? why 
