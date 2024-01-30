import React from 'react'

const DataType = () => {
  return (
    <div>
      <h2>Question 1:</h2>
        What will be the output of the below program?
          <pre>
            {`
            class A {
                public static void main(String[] args) {
                    System.out.println(args.length);
                }
            }
            `}
          </pre>

        <label>
          <input type="radio" name="q1" value="a" /> A. 1
        </label><br />

        <label>
          <input type="radio" name="q1" value="b" /> B. 0
        </label><br />

        <label>
          <input type="radio" name="q1" value="c" /> C. Null
        </label><br />

        <label>
          <input type="radio" name="q1" value="d" /> D. Compile time error
        </label><br />
 
        
        <button type="submit">Submit</button>
    </div>
  )
}

export default DataType
