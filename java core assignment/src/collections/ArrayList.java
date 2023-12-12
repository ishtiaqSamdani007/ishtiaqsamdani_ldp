package collections;

class ArrayList {
    public static void main(String[] args) {

        // Declaring the ArrayList
        java.util.ArrayList<Integer> arr = new java.util.ArrayList<Integer>();

        // Appending the elements
        for (int i = 1; i <= 5; i++) {
            arr.add(i);
        }

        System.out.println(arr);

        // Remove element at index 3
        arr.remove(3);

        System.out.println(arr);

        for (int i = 0; i < arr.size(); i++) {
            System.out.print(arr.get(i) + " ");
        }
    }
}
