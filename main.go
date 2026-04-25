package main

import "fmt"

func fibonacci(n int) int {
	if n <= 1 {
		return n
	}

	return fibonacci(n-1) + fibonacci(n-2)
}

func printFibonacci(count int) {
	for i := 0; i < count; i++ {
		fmt.Printf("%d ", fibonacci(i))
	}
	fmt.Println()
}

func main() {
	printFibonacci(10)
}
