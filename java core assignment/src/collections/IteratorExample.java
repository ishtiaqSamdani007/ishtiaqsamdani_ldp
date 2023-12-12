package collections;

import java.util.ArrayList;
import java.util.Iterator;

public class IteratorExample {
    // Main driver method
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<Integer> arr = new ArrayList<Integer>();

        for (int i = 0; i < 10; i++)
            arr.add(i);

        System.out.println(arr);

        // iterator
        Iterator<Integer> itr = arr.iterator();

        // Checking the next element by using hasNext()
        while (itr.hasNext()) {
            // Moving cursor to next element
            int i = itr.next();
            System.out.print(i + " ");

            // Removing odd elements
            if (i % 2 != 0)
                itr.remove();
        }
        System.out.println();
        System.out.println(arr);
    }
}
