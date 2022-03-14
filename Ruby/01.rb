5.times do |i|
    p i
end

p (1..100).select{|n| n.odd?}
# 1. upto(10){|n|puts n}


# block 無法單獨存活
# {
#     p "我是大括號block"
# }

# do
#     p "我是 do end型的block"
# end



def say_hello 
    # p "hi"
    yield  3, 6   #yield交還控制權給block
    # p "大家好"
end
#block就像寄生蟲一樣，依附在方法後面。
say_hello { |n, m|
    puts "#{n},#{m}"
   
}

def test_two
    if yield (3)   #交還控制權，並回傳3
        p "yes, it is 2"
    else
        p "no, it is not 2"
    end
end

test_two { |n|
    n ==2         #不需要使用return,最後一行即為執行結果
}

