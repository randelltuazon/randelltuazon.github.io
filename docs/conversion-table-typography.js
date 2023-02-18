import React from 'react';

export default function ConversionTableTypography() {
  return (
    <figure className="border-4 rounded">
      <figcaption className="p-4">
        <div className="table-responsive">
          <table className="table w-full">
            <thead>
              <tr>
                <th scope="col">Bootstrap Classes</th>
                <th scope="col">Tailwind Equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">.h1</th>
                <td>
                  <code className="font-bold text-pink">text-4xl font-medium</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.h2</th>
                <td>
                  <code className="font-bold text-pink">text-3xl font-medium</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.h3</th>
                <td>
                  <code className="font-bold text-pink">text-2xl font-medium</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.h4</th>
                <td>
                  <code className="font-bold text-pink">text-xl font-medium</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.h5</th>
                <td>
                  <code className="font-bold text-pink">text-lg font-medium</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.h6</th>
                <td>
                  <code className="font-bold text-pink">text-base font-medium</code>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row">.display-1</th>
                <td>
                  <code className="font-bold text-pink">text-6xl font-light</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.display-2</th>
                <td>
                  <code className="font-bold text-pink">text-5xl font-light</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.display-3</th>
                <td>
                  <code className="font-bold text-pink">text-4xl font-light</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.display-4</th>
                <td>
                  <code className="font-bold text-pink">text-3xl font-light</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.display-5</th>
                <td>
                  <code className="font-bold text-pink">text-2xl font-light</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.display-6</th>
                <td>
                  <code className="font-bold text-pink">text-xl font-light</code>
                </td>
              </tr>
            </tbody>
            <tbody>
                <tr>
                <th scope="row">.lead</th>
                <td>
                  <code className="font-bold text-pink">text-xl font-light</code>
                </td>
              </tr>
            </tbody>
            <tbody>
                <tr>
                <th scope="row">.lead</th>
                <td>
                  <code className="font-bold text-pink">text-xl font-light</code>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row">.list-unstyled</th>
                <td>
                  <code className="font-bold text-pink">list-none pl-0</code>
                </td>
              </tr>
              <tr>
                <th scope="row">ul (unordered)</th>
                <td>
                  <code className="font-bold text-pink">list-disc pl-8</code>
                </td>
              </tr>
              <tr>
                <th scope="row">ol (ordered)</th>
                <td>
                  <code className="font-bold text-pink">list-decimal pl-8</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.list-inline</th>
                <td>
                  <code className="font-bold text-pink">list-none pl-0</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.list-inline-item</th>
                <td>
                  <code className="font-bold text-pink">inline-block mr-2</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </figcaption>
    </figure>
  );
}
