import React from 'react';

export default function ConversionTableImages() {
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
                <th scope="row">.img-fluid</th>
                <td>
                  <code className="font-bold text-pink">max-w-full h-auto</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.img-thumbnail</th>
                <td>
                  <code className="font-bold text-pink">p-1 bg-white border rounded max-w-full h-auto</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </figcaption>
    </figure>
  );
}
