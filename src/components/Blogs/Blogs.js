import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="p-6 bg-slate-200">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-2 text-gray-800">1. What is the purpose of Context API ?</h2>
                    <p class="text-gray-700">The Context API is a React structure that lets you share unique facts and helps you solve prop-drilling problems at various levels of your project. A React app may use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparents to kid to parent and so on. All you need is React.createContext(). It will provide you a customer and a provider. Provider is a component that supplies the state to its children, as its name indicates. It will contain the "store" and serve as the parent of any components that may require it. A component that consumes and utilizes the state is known as a consumer.</p>
                </div>
            </div>
            <div class="p-6 bg-slate-200">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-2 text-gray-800">2. What is Semantic Tag ?</h2>
                    <p class="text-gray-700">Semantic HTML tags give information about the contents in addition to how they appear on a page. The browser recognizes text enclosed in the element as some kind of coding language right away. Semantic tags also provide you with a lot more hooks for customizing your text. You may choose to have your code samples appear in the normal browser style today, but tomorrow you may want to highlight them with a gray background color; later yet, you may want to specify the exact monospaced font family or font stack to use for your samples. All of these things are simple to accomplish using semantic markup and well-placed CSS.</p>
                </div>
            </div>
            <div class="p-6 bg-slate-200">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl font-bold mb-2 text-gray-800">3. What are the differences between inline, block and inline block elements ?</h2>
                    <p class="text-gray-700 font-bold">Inline</p>
                    <p class="text-gray-700">Inline displays the element inline or on the same line. In other words, inline elements do NOT start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have no effects.</p>
                    <p class="text-gray-700 font-bold">Block</p>
                    <p class="text-gray-700">Block starts on a new line and takes up the full width available. So that means, block elements will occupy the entire width of its parent element.</p>
                    <p class="text-gray-700 font-bold">Inline-block</p>
                    <p class="text-gray-700">Displays an element as an inline-level block container. You can set height and width values. Its essentially the same thing as inline, except that you can set height and width values.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;