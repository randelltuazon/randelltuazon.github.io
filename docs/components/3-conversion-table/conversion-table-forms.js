import React from 'react';

export default function ConversionTableForms() {
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
                <th scope="row">.form-control</th>
                <td>
                  <code className="font-bold text-pink">block w-full py-2 px-3 leading-tight border rounded appearance-none</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </figcaption>
    </figure>
  );
}
