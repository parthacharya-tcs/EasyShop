import React, { useState } from "react";


interface FilterOption {
  id: string;
  label: string;
  options: string[];
}

const filterOptions: FilterOption[] = [
  {
    id: "category",
    label: "Category",
    options: [
      "Supermarkets",
      "Restaurants",
      "Pharmacy",
      "Spirits",
      "Technology",
      "Beauty",
      "Fashion",
      "Home",
      "Gifts",
      "Books",
    ],
  },
  { id: "gender", label: "Gender", options: ["Men", "Women", "Unisex"] },
  {
    id: "fabrics",
    label: "Fabrics",
    options: ["Cotton", "Polyester", "Wool", "Silk", "Linen"],
  },
  {
    id: "color",
    label: "Color",
    options: ["Black", "White", "Red", "Blue", "Green"],
  },
  {
    id: "price",
    label: "Price",
    options: ["Under $50", "$50-$100", "$100-$200", "Over $200"],
  },
  {
    id: "discount",
    label: "Discount",
    options: ["10% Off", "20% Off", "30% Off", "50% Off"],
  },
  {
    id: "rating",
    label: "Rating",
    options: ["4★ & above", "3★ & above", "2★ & above"],
  },
  { id: "size", label: "Size", options: ["XS", "S", "M", "L", "XL", "XXL"] },
  {
    id: "combo",
    label: "Combo",
    options: ["Buy 1 Get 1", "Buy 2 Get 1", "Special Bundle"],
  },
  {
    id: "material",
    label: "Material",
    options: ["Leather", "Metal", "Plastic", "Glass"],
  },
  {
    id: "bottomLength",
    label: "Bottom Length",
    options: ["Short", "Regular", "Long"],
  },
];

interface FilterPageProps {
  onClose: () => void;
  selectedFilters: Record<string, string[]>;
  onApplyFilters: (filters: Record<string, string[]>) => void;
}

const FilterPage: React.FC<FilterPageProps> = ({
  onClose,
  selectedFilters,
  onApplyFilters,
}) => {
  const [localFilters, setLocalFilters] =
    useState<Record<string, string[]>>(selectedFilters);
  const [activeCategory, setActiveCategory] = useState(filterOptions[0].id);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionToggle = (categoryId: string, option: string) => {
    setLocalFilters((prev) => {
      const currentOptions = prev[categoryId] || [];
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter((item) => item !== option)
        : [...currentOptions, option];

      return {
        ...prev,
        [categoryId]: newOptions,
      };
    });
  };

  const getSelectedCount = (categoryId: string) => {
    return (localFilters[categoryId] || []).length;
  };

  const getTotalSelectedCount = () => {
    return Object.values(localFilters).reduce(
      (acc, curr) => acc + curr.length,
      0,
    );
  };

  const handleReset = () => {
    setLocalFilters({});
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setShowOptions(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
        <button
          onClick={onClose}
          className="rounded-full p-1 transition-colors hover:bg-gray-100"
          aria-label="Back"
        >
          {/* <ArrowLeft className="h-5 w-5" /> */}
        </button>
        <span className="text-base font-medium">Filter</span>
        <button
          onClick={handleReset}
          className="text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          RESET
        </button>
      </div>

      {/* Filter Options */}
      <div className="flex h-[calc(100vh-128px)] overflow-hidden">
        {/* Categories */}
        <div className="w-full max-w-[120px] overflow-y-auto bg-gray-50">
          {filterOptions.map((category) => {
            const count = getSelectedCount(category.id);
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative flex w-full items-center justify-between px-4 py-3 text-left text-sm ${activeCategory === category.id ? "border-l-4 border-pink-500 bg-white" : "hover:bg-gray-100"} ${count > 0 ? "font-medium text-pink-500" : "text-gray-600"}`}
              >
                <span className="truncate">{category.label}</span>
                {count > 0 && (
                  <span className="ml-1 rounded-full bg-pink-100 px-1.5 text-xs text-pink-500">
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Options */}
        <div className="flex-1 overflow-y-auto bg-white px-4 py-2">
          {filterOptions.map((category) => (
            <div
              key={category.id}
              className={`space-y-3 ${category.id === activeCategory ? "block" : "hidden"}`}
            >
              {category.options.map((option) => {
                const isSelected = (localFilters[category.id] || []).includes(
                  option,
                );
                return (
                  <label
                    key={option}
                    className="flex items-center rounded-lg px-3 py-2 transition-colors hover:bg-gray-50"
                  >
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleOptionToggle(category.id, option)}
                        className="h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                      />
                      {isSelected && (
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <div className="h-2 w-2 animate-ping rounded-full bg-pink-500" />
                        </div>
                      )}
                    </div>
                    <span className="ml-3 text-sm">{option}</span>
                  </label>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <div className="fixed right-0 bottom-0 left-0 border-t border-gray-100 bg-white p-4">
        <button
          onClick={handleApply}
          className="relative w-full overflow-hidden rounded-lg bg-pink-500 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-600"
          disabled={getTotalSelectedCount() === 0}
        >
          <span className="relative z-10">
            APPLY{" "}
            {getTotalSelectedCount() > 0 && `(${getTotalSelectedCount()})`}
          </span>
          {getTotalSelectedCount() > 0 && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-pink-600 to-pink-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FilterPage;
