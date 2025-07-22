import { FaRegStar, FaRegBookmark, FaRegComment } from 'react-icons/fa';

const GradientBorderCard = () => {
  return (
      <div className="max-w-sm w-full">
        <div className="group relative p-0.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
          <div className="relative bg-white rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg mr-3">
                <FaRegBookmark className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Título do Card</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Este é um exemplo de card com borda colorida em gradiente. O conteúdo pode conter uma breve descrição ou informações relevantes.
            </p>
            <div className="flex justify-between border-t border-gray-100 pt-4">
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors">
                  <FaRegStar className="mr-1" />
                  <span>Salvar</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-purple-500 transition-colors">
                  <FaRegComment className="mr-1" />
                  <span>Comentar</span>
                </button>
              </div>
              <div className="text-gray-400 text-sm">2 min</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default GradientBorderCard;