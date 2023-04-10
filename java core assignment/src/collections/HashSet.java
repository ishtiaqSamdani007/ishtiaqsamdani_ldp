package collections;

import java.util.*;

public class HashSet {

    // Main Method
    public static void main(String args[]) {
        // Creating HashSet
        java.util.HashSet<String> hashSet = new java.util.HashSet<String>();

        hashSet.add("Geeks");
        hashSet.add("For");
        hashSet.add("Geeks");
        hashSet.add("Is");
        hashSet.add("Very helpful");

        Iterator<String> itr = hashSet.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }
    }
}
