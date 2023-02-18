import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function FourColumns() {
  return (
    <figure className="border-2 rounded">
      <blockquote className="p-4 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-3/12 bg-gray-500 h-12 p-4">.w-3/12</div>
            <div className="w-3/12 bg-gray-400 h-12 p-4">.w-3/12</div>
            <div className="w-3/12 bg-gray-500 h-12 p-4">.w-3/12</div>
            <div className="w-3/12 bg-gray-400 h-12 p-4">.w-3/12</div>
          </div>
        </div>
      </blockquote>
      <figcaption className="bg-gray-200 py-2 px-4 text-sm font-bold">
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.col-3</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">w-3/12</code> <br />
                <code className="text-pink">w-1/4</code>
              </td>
            </tr>
          </tbody>
        </table>
      </figcaption>
      <figcaption className="bg-gray-300 p-4">
        <div className="relative">
          <CodeBlock
            className="!mb-0"
            language="markup"
            title=""
            showLineNumbers
          >
{`<div class="container mx-auto px-4">
  <div class="flex flex-wrap -mx-4">
    <div class="w-3/12 p-4">.w-3/12</div>
    <div class="w-3/12 p-4">.w-3/12</div>
    <div class="w-3/12 p-4">.w-3/12</div>
    <div class="w-3/12 p-4">.w-3/12</div>
  </div>
</div>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
