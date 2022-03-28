# Dynamic Programming(동적 계획법)

현제 문제를 하위 문제로 해결할 수 있는 경우 적용 가능
대표적인 문제: 피보나치 수열

DP와 분할정복은 다름. 가장 큰 차이점은 문제의 중복성

최적하위구조 Optimal Substructure

릿코드 퀴즈

Q. Dynamic Programming is used for problems with:

A. Optimal Substructure
A. Overlapping subproblems

Problems that have optimal substructure and overlapping subproblems are good problems to be solved with dynamic programming.


Q. Without memoization, a recursive solution for Fibonacci Number would have the time complexity:

A. O(2^n)

Each call to F(n) makes 2 additional calls, to F(n-1) and F(n-2). Those 2 calls will then generate 4 calls, which will generate 8, etc.


Q. Usually, top-down algorithms are fater than bottom-up ones.

A. False

Usually, a bottom-up algorithms will be fater than the equivalent top-down algorithms as there is some overhead with recursive function calls. However, sometimes, a top-down dynamic programming approach will be the better option, such as when only a fraction of the subproblems need to be solved.


Q. A common characteristic of problems that can be solved with dynamic programming is that they ask for the maximum or minimum of something.

A. True

While this is true, not all problems with this characteristic should be solved with dynamic programming.
(그럼 False 아닌가..)


Q. __ approaches can be parallelized while __ approaches cannot.

A. (Divide and conquer), (dynamic programming)

Strictly speaking, both can be parallized, however the steps required to parallize dynamic programming approaches are quire complex. So generally speaking, divide and conquer approaches can be parallized while dynamic programming cannot be (easily) parallized. This is because the subproblems in divide and conquer approaches are independent of one another (they do not overlap) while in dynamic programming, the subproblems do overlap.


Q. __ dynamic programming solutions make recursive calls according to the recurrence relation while __ dynamic programming solutions strategicalliy iterate over each state.

A. (Top-down), (Bottom-up)

Top-down DP solutions are generally considered more intuitive because we can simply make recursive calls according to the recursive relation whenever the current state is not a base case. On the other hand, bottom-up DP solutions require us to iterate over the subproblems in a specific order so that all the results necessary to solve the subproblem for the current state have already been obtained before arriving at the current state.


Q. Which of the following must be done when converting top-down DP solution into a bottom-up DP solution? 

A. Find the correct order in which to iterate over the states.

When converting a top-down solution to a bottom-up solution, we can still use the same base case(s) and the same recurrent relation. However, bottom-up DP solutions iterate over all of the states (starting at the base case) such that all the results necessary to solve each problem for the current state have already been obtained before arriving at the current state. So, to convert a top-down solution into a bottom-up solution, we must first fina a logical order in which to iterate over the states.


문제도 풀고 싶지만 유료라.. 다른 플랫폼에서 풀어봐야지..