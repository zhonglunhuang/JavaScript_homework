# 把陣列 [1, 3, 4, 1, 7, nil, 7] 由小到大排序，並且移除 nil 以及重複的數字。

list = [1, 3, 4, 1, 7, nil, 7] 

def checkList (arr)
    for i in 0..arr.length-1 do
        if arr.count(arr[i]) > 1
            x = arr[i]
            arr.delete(arr[i])
            arr.push(x)
        end
    end
    arr.delete(nil)
    arr.sort!
    return arr
end

p checkList(list)

# 計算 1 ~ 100 之間所有單數的總和
result = 0
for i in 1..100 do
    if i %2 == 1
        result = result + i
    end
end
p result