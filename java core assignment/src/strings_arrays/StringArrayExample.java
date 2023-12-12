package strings_arrays;

public class StringArrayExample {
    public static void main(String[] args) {
        // Declare and initialize a string array
        String[] fruits = {"Apple", "Banana", "Orange", "Mango", "Pineapple"};

        // Access elements of the array using an index
        System.out.println("The first fruit in the array is " + fruits[0]);
        System.out.println("The third fruit in the array is " + fruits[2]);

        // Loop through the array and print each element
        System.out.println("The fruits in the array are:");
        for (int i = 0; i < fruits.length; i++) {
            System.out.println(fruits[i]);
        }

        // Change the value of an element in the array
        fruits[1] = "Pear";
        System.out.println("The second fruit in the array is now " + fruits[1]);
    }
}
