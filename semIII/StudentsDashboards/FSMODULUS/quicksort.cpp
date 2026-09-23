#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int lb, int high) {
    int pivot = arr[high];
    int i = lb - 1;

    for (int j = lb; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int lb, int high) {
    if (lb < high) {
        int pivotIndex = partition(arr, lb, high);

        quickSort(arr, lb, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};

    quickSort(arr, 0, arr.size() - 1);

    for (int x : arr)
        cout << x << " ";

    return 0;
}