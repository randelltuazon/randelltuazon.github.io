import React from 'react';

export default function ConversionTableTables() {
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
                <th scope="row">.table</th>
                <td>
                  <code className="font-bold text-pink">border-collapse w-full align-top</code>
                </td>
              </tr>
              <tr>
                <th scope="row">th</th>
                <td>
                  <code className="font-bold text-pink">text-left</code>
                </td>
              </tr>
              <tr>
                <th scope="row">thead</th>
                <td>
                  <code className="font-bold text-pink">align-bottom</code>
                </td>
              </tr>
              <tr>
                <th scope="row">td, th</th>
                <td>
                  <code className="font-bold text-pink">p-2 border-b</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.table-responsive</th>
                <td>
                  <code className="font-bold text-pink">overflow-x-auto</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </figcaption>
    </figure>
  );
}
