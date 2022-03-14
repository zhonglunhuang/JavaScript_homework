#block不是參數
def say_hello_to (someone)
    yield someone
end

def say_hello_to2
    if block_given?  # block_given? 檢查block 是否存在
        yield   #有yield就要有block 否則會噴錯
    end
end

say_hello_to ("悟空") { |name|
    puts "Hi #{name}"
}

say_hello_to2
say_hello_to2 {
    puts "hi"
}

1.upto(10) { |n| p n}



