import { useState } from "react";
import PropTypes from 'prop-types';
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Upload, X, Shield, Cpu, Tag } from "lucide-react";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Residential");
  const [price, setPrice] = useState("");
  const [features, setFeatures] = useState([""]);
  const [specifications, setSpecifications] = useState("");
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);

      const featuresArray = features.filter(f => f.trim() !== "");
      formData.append("features", JSON.stringify(featuresArray));

      const specsObj = {};
      specifications.split('\n').forEach(line => {
        const [key, ...value] = line.split(':');
        if (key && value.length > 0) {
          specsObj[key.trim()] = value.join(':').trim();
        }
      });
      formData.append("specifications", JSON.stringify(specsObj));

      formData.append("bestSeller", bestSeller);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("New Architecture Added to Registry");
        resetForm();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const resetForm = () => {
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
    setName("");
    setDescription("");
    setCategory("Residential");
    setPrice("");
    setFeatures([""]);
    setSpecifications("");
    setBestSeller(false);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const removeFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures.length === 0 ? [""] : updatedFeatures);
  };

  const updateFeature = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  return (
    <div className="animation-fadeIn max-w-4xl">
      <div className="mb-10">
        <p className="text-primary text-[10px] uppercase tracking-[0.4em] font-black mb-3">Asset Registration</p>
        <h2 className="serif-title text-4xl text-white">Add New <span className="italic text-primary/80">Architecture</span></h2>
      </div>

      <form onSubmit={onSubmitHandler} className="glass-card border border-white/10 p-10 rounded-sm space-y-10">
        {/* Image Upload Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Upload size={14} className="text-primary" />
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Asset Visuals</h4>
          </div>
          <div className="flex flex-wrap gap-4">
            {[setImage1, setImage2, setImage3, setImage4].map((setter, i) => (
              <div key={i} className="relative group">
                <label
                  htmlFor={`image${i + 1}`}
                  className="w-24 aspect-square border border-white/10 hover:border-primary/50 rounded-sm cursor-pointer flex items-center justify-center bg-white/[0.02] transition-all overflow-hidden"
                >
                  {![image1, image2, image3, image4][i] ? (
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/10">
                        <Upload size={14} className="text-white/20 group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-[8px] uppercase tracking-widest text-white/20">Slot {i + 1}</span>
                    </div>
                  ) : (
                    <img
                      className="w-full h-full object-cover"
                      src={URL.createObjectURL([image1, image2, image3, image4][i])}
                      alt="Preview"
                    />
                  )}
                  <input onChange={(e) => setter(e.target.files[0])} type="file" id={`image${i + 1}`} hidden accept="image/*" />
                </label>
                {[image1, image2, image3, image4][i] && (
                  <button
                    type="button"
                    onClick={() => setter(null)}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Identity Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Tag size={14} className="text-primary" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Architectural Identity</h4>
            </div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm"
              placeholder="e.g. Sovereign MRL Elevator"
              required
            />
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-4 opacity-70">Design Narrative</h4>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm resize-none"
              rows="3"
              placeholder="Luxury residential lift with gold finish and near-silent operation..."
              required
            />
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-4 opacity-70">Classification</h4>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="w-full bg-obsidian border border-white/10 p-4 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:border-primary transition-all rounded-sm cursor-pointer"
              style={{ colorScheme: 'dark' }}
            >
              <option value="Residential" className="bg-black text-white">Residential</option>
              <option value="Commercial" className="bg-black text-white">Commercial</option>
              <option value="Hospitality" className="bg-black text-white">Hospitality</option>
              <option value="Industrial" className="bg-black text-white">Industrial</option>
              <option value="Goods" className="bg-black text-white">Goods Registry</option>
            </select>

          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-4 opacity-70">Base Valuation (INR)</h4>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary text-white text-sm transition-colors rounded-sm font-mono"
              type="number"
              placeholder="1200000"
              required
            />
          </div>
        </section>

        {/* Technical Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield size={14} className="text-primary" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                Core Features
              </h4>
            </div>

            <div className="border border-white/10 p-4 rounded-sm space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2 items-end">
                  <div className="flex-1">
                    <label className="text-xs text-white/60 uppercase tracking-wider block mb-2">
                      Feature {index + 1}
                    </label>
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      placeholder="e.g., Maximum Height, Door Type, Speed"
                      className="w-full bg-white/5 border border-white/10 p-2 outline-none focus:border-primary text-white text-xs font-manrope rounded-sm"
                    />
                  </div>
                  {feature.trim() === "" && features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="px-3 py-2 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-400 rounded-sm transition-colors flex items-center gap-1"
                      title="Delete empty feature"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addFeature}
              className="mt-4 w-full px-4 py-3 bg-primary/10 border border-primary/30 hover:bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-sm transition-all"
            >
              + Add New Feature
            </button>

            <p className="text-[8px] text-white/20 uppercase tracking-widest mt-2">
              Add feature names only. Once created, features cannot be deleted.
            </p>

          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={14} className="text-primary" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Technical Specs</h4>
            </div>

            <div className="border border-white/10 p-4 rounded-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <label className="text-xs text-white/60 uppercase tracking-wider w-full md:w-1/4">
                  Capacity:
                </label>
                <input
                  type="number"
                  placeholder="Enter Capacity"
                  className="w-full md:w-3/4 bg-white/5 border border-white/10 p-2 outline-none focus:border-primary text-white text-xs font-manrope transition-colors rounded-sm"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <label className="text-xs text-white/60 uppercase tracking-wider w-full md:w-1/4">
                  Speed:
                </label>
                <input
                  type="text"
                  placeholder="Enter Speed"
                  className="w-full md:w-3/4 bg-white/5 border border-white/10 p-2 outline-none focus:border-primary text-white text-xs font-manrope transition-colors rounded-sm"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <label className="text-xs text-white/60 uppercase tracking-wider w-full md:w-1/4">
                  Drive:
                </label>
                <select
                  className="w-full md:w-3/4 bg-black border border-white/60 p-2 outline-none focus:border-primary text-white text-xs font-manrope transition-colors rounded-sm"
                  required
                >
                  <option className="bg-white/5text-white" value="">Select Drive Type</option>
                  <option className="bg-black text-white" value="Gearless">Gearless</option>
                  <option className="bg-black text-white" value="Geared">Geared</option>
                  <option className="bg-black text-white" value="Hydraulic">Hydraulic</option>
                </select>

              </div>
            </div>

            <p className="text-[8px] text-white/20 uppercase tracking-widest mt-2">
              Enter specifications individually.
            </p>
          </div>
        </section>

        {/* Protocol Section */}
        <section className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setBestSeller(prev => !prev)}>
            <div className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-all ${bestSeller ? 'bg-primary border-primary' : 'border-white/20 group-hover:border-primary/50'}`}>
              {bestSeller && <div className="w-2 h-2 bg-black rounded-full" />}
            </div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 cursor-pointer group-hover:text-white transition-colors">Mark as Prestige Asset</label>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 md:flex-none px-8 py-4 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-all rounded-sm"
            >
              Clear Protocol
            </button>
            <button
              type="submit"
              className="flex-1 md:flex-none px-12 py-4 bg-primary text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all rounded-sm shadow-xl shimmer-effect"
            >
              Register Architecture
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

Add.propTypes = {
  token: PropTypes.string.isRequired
};

export default Add;
